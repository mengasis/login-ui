<script lang="ts">
  import { goto } from '$app/navigation';
  import AuthContainer from '$lib/components/AuthContainer.svelte';
  import { auth } from '$lib/stores/auth';
  import { getEmailError } from '$lib/utils/validations';

  let email = '';
  let error = '';

  async function onsubmit(e: Event) {
    e.preventDefault();
    error = getEmailError(email);
    
    if (error) return;

    try {
      // Here you would typically validate the email with your backend
      // For now, we'll just simulate it
      auth.setEmail(email);
      goto('/auth/methods');
    } catch (err) {
      error = 'An error occurred. Please try again.';
    }
  }
</script>

<AuthContainer
  title="Sign in"
  subtitle="to continue to your application"
>
  <form {onsubmit} class="space-y-6">
    <div>
      <input
        type="email"
        id="email"
        bind:value={email}
        placeholder="Email"
        class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-800"
      />
      {#if error}
        <p class="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      {/if}
    </div>

    <button
      type="submit"
      class="w-full rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
    >
      Next
    </button>
  </form>
</AuthContainer>
