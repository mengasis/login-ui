<script>
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    theme.subscribe((value) => {
      document.documentElement.className = value;
    });
  });
</script>

<button on:click={toggleTheme} class="p-2">
  {#if $theme === 'light'}
    🌙
  {:else}
    ☀️
  {/if}
</button>
