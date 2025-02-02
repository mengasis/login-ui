<script lang="ts">
  import { goto } from '$app/navigation';
  import AuthContainer from '$lib/components/AuthContainer.svelte';
  import { auth } from '$lib/stores/auth';
  import { onMount } from 'svelte';

  let { email } = $state($auth);
  let isSending = $state(true);
  let error = $state<string | null>(null);

  async function sendMagicLink() {
    try {
      // TODO: Implement actual magic link sending logic
      // This is a mock implementation
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (e) {
      error = e instanceof Error ? e.message : 'Failed to send magic link';
    } finally {
      isSending = false;
    }
  }

  onMount(() => {
    if (!email) {
      goto('/auth');
      return;
    }
    sendMagicLink();
  });
</script>

<AuthContainer
  title={error ? 'Something went wrong' : 'Check your email'}
  subtitle={error ? 'We could not send the magic link' : `We sent a sign-in link to ${email}`}
>
  <div class="space-y-4">
    {#if error}
      <div class="rounded-md bg-red-50 p-4 dark:bg-red-900/50">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800 dark:text-red-200">
              {error}
            </h3>
          </div>
        </div>
      </div>
      <button
        onclick={() => goto('/auth/methods')}
        class="w-full rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      >
        Try another method
      </button>
    {:else}
      {#if isSending}
        <div class="flex justify-center">
          <svg class="h-8 w-8 animate-spin text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      {:else}
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Click the link in the email to sign in. If you don't see the email, check your spam folder.
        </p>
        <button
          onclick={() => goto('/auth/methods')}
          class="w-full rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          Use a different method
        </button>
      {/if}
    {/if}
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
