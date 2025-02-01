<script lang="ts">
  import { goto } from '$app/navigation';
  import AuthContainer from '$lib/components/AuthContainer.svelte';
  import { auth } from '$lib/stores/auth';
  import { getPasswordError } from '$lib/utils/validations';

  let password = '';
  let error = '';

  $: email = $auth.email;

  async function onsubmit(e: Event) {
    e.preventDefault();
    error = getPasswordError(password);
    
    if (error) return;

    try {
      // Here you would typically validate the credentials with your backend
      // For now, we'll just simulate it
      auth.setAuthenticated(true);
      goto('/profile');
    } catch (err) {
      error = 'Invalid password. Please try again.';
    }
  }
</script>

<AuthContainer
  title="Enter your password"
  subtitle={email}
>
  <form {onsubmit} class="space-y-6">
    <div>
      <input
        type="password"
        id="password"
        bind:value={password}
        placeholder="Enter your password"
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

  <div class="mt-8 text-center">
    <button
      onclick={() => goto('/auth/methods')}
      class="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
    >
      Try another way to sign in
    </button>
  </div>
</AuthContainer>
