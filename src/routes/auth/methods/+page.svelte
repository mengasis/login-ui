<script lang="ts">
  import { goto } from '$app/navigation';
  import AuthContainer from '$lib/components/AuthContainer.svelte';
  import GoogleSignInButton from '$lib/components/GoogleSignInButton.svelte';
  import { auth } from '$lib/stores/auth';
  import type { AuthMethod } from '$lib/types/auth';

  let methods: Array<{ id: AuthMethod; label: string; icon: string }> = [
    { 
      id: 'password', 
      label: 'Use your password',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>`
    },
    { 
      id: 'magic-link', 
      label: 'Sign in with email link',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
    },
    { 
      id: 'otp', 
      label: 'Get a verification code',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`
    },
    { 
      id: 'passkey', 
      label: 'Use a passkey',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>`
    },
  ];

  function selectMethod(method: AuthMethod) {
    auth.setMethod(method);
    goto(`/auth/${method}`);
  }

  $: email = $auth.email;
</script>

<AuthContainer
  title="Choose a way to sign in"
  subtitle={email}
>
  <div class="space-y-3">
    {#each methods as method}
      <button
        onclick={() => selectMethod(method.id)}
        class="flex w-full items-center justify-between rounded-lg border border-gray-300 p-4 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
      >
        <div class="flex items-center space-x-3">
          <div class="text-gray-600 dark:text-gray-300">
            {@html method.icon}
          </div>
          <span class="text-gray-700 dark:text-gray-200">{method.label}</span>
        </div>
        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    {/each}
    <GoogleSignInButton />
  </div>

  <div class="mt-8 text-center">
    <button
      onclick={() => goto('/auth')}
      class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
    >
      Sign in with a different email
    </button>
  </div>
</AuthContainer>
