<script lang="ts">
  import { goto } from '$app/navigation';
  import AuthContainer from '$lib/components/AuthContainer.svelte';
  import { auth } from '$lib/stores/auth';

  let isLoading = false;
  let error: string | null = null;
  let isSuccess = false;

  let isRegistering = false;
  let isAuthenticating = false;

  async function handlePasskeyRegistration() {
    isLoading = true;
    isRegistering = true;
    error = null;

    try {
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to register passkey';
    } finally {
      isLoading = false;
      isRegistering = false;
    }
  }

  async function handlePasskeyAuthentication() {
    isLoading = true;
    isAuthenticating = true;
    error = null;

    try {
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to authenticate with passkey';
    } finally {
      isLoading = false;
      isAuthenticating = false;
    }
  }

  function goBack() {
    goto('/auth/methods');
  }

  $: email = $auth.email;
</script>

<AuthContainer title="Sign in with Passkey" subtitle={email}>
  <div class="space-y-6">
    {#if error}
      <div class="rounded-md bg-red-50 p-4 dark:bg-red-900/50">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-red-700 dark:text-red-200">{error}</p>
          </div>
        </div>
      </div>
    {/if}

    <button
      onclick={handlePasskeyAuthentication}
      disabled={isLoading}
      class="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 dark:disabled:bg-blue-700"
    >
      {#if isLoading}
        <svg class="h-5 w-5 animate-spin" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      {:else}
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      {/if}
      <span>
        {#if isLoading}
          {isRegistering ? 'Registering passkey...' : 'Authenticating...'}
        {:else}
          Sign in with passkey
        {/if}
      </span>
    </button>

    <div class="rounded-md bg-gray-50 p-4 dark:bg-gray-800">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Passkeys provide a secure, passwordless way to sign in. Your device will verify your identity.
          </p>
        </div>
      </div>
    </div>

    <button
      onclick={goBack}
      class="flex w-full items-center justify-center space-x-2 rounded-lg border border-gray-300 px-4 py-3 text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
    >
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span>Back to sign in options</span>
    </button>
  </div>
</AuthContainer>
