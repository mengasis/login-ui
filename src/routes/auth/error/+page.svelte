<script lang="ts">
  import { goto } from '$app/navigation';
  import AuthContainer from '$lib/components/AuthContainer.svelte';
  import { auth } from '$lib/stores/auth';

  $: error = $auth.error;
</script>

<AuthContainer
  title="Something went wrong"
>
  <div class="text-center">
    <div class="mb-6 text-red-600 dark:text-red-400">
      <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    </div>
    <p class="mb-6 text-gray-600 dark:text-gray-300">
      {error || 'An unexpected error occurred. Please try again.'}
    </p>
    <button
      on:click={() => {
        auth.reset();
        goto('/auth');
      }}
      class="w-full rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
    >
      Try again
    </button>
  </div>
</AuthContainer>
