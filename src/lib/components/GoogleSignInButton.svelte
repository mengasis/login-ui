<script lang="ts">
  import { onMount } from 'svelte';

  let isLoading = true;

  function handleCredentialResponse(response: any) {
    console.log('Google token:', response.credential);
  }

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google?.accounts?.id?.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse
      });

      const buttonElement = document.getElementById('googleSignInButton');

      if (buttonElement) {
        window.google?.accounts?.id?.renderButton(buttonElement, {
          theme: 'outline',
          size: 'large',
          text: 'continue_with',
          shape: 'rectangular'
        });
      }

      window.google?.accounts.id.prompt();
      isLoading = false;
    };
  });
</script>

{#if isLoading}
  <div class="h-10 w-full animate-pulse rounded-md bg-gray-200"></div>
{/if}
<div id="googleSignInButton"></div>
