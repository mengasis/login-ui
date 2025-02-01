<script lang="ts">
  import { goto } from '$app/navigation';
  import AuthContainer from '$lib/components/AuthContainer.svelte';
  import { auth } from '$lib/stores/auth';
  import { getVerificationCodeError } from '$lib/utils/validations';

  let code = '';
  let error = '';
  
  $: email = $auth.email;

  async function onsubmit(e: Event) {
    e.preventDefault();
    error = getVerificationCodeError(code);
    
    if (error) return;

    try {
      // Here you would typically validate the OTP with your backend
      // For now, we'll just simulate it
      auth.setAuthenticated(true);
      goto('/profile');
    } catch (err) {
      error = 'Invalid verification code. Please try again.';
    }
  }
</script>

<AuthContainer 
  title="Enter verification code"
  subtitle="We've sent a verification code to {email}"
>
<div class="verification-code">
  <form class="space-y-4" {onsubmit}>
    <div>
      <label for="code" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Verification Code
      </label>
      <div class="mt-1">
        <input
          type="text"
          id="code"
          name="code"
          bind:value={code}
          placeholder="Enter 6-digit code"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
        />
      </div>
      {#if error}
        <p class="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      {/if}
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
      >
        Verify Code
      </button>
    </div>
  </form>
</div>
</AuthContainer>
