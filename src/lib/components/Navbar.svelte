<script>
  import ButtonTheme from './ButtonTheme.svelte';
  import { user } from '$lib/stores/auth';
  let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };
</script>

<header
  class="flex items-center justify-between bg-white p-4 shadow-md transition-colors duration-300 dark:bg-navbarDark"
>
  <a href="/" class="text-xl font-bold text-forestGreen dark:text-white"> Logo </a>

  <nav class="hidden items-center space-x-4 md:flex">
    {#if $user}
      <a
        href="/profile"
        class="rounded-sm border border-forestGreen px-8 py-2 text-forestGreen transition hover:bg-ghostHoverLight dark:border-white dark:text-white dark:hover:bg-ghostHoverDark"
      >
        Profile
      </a>
      <a
        href="/signup"
        class="rounded-sm bg-forestGreen px-8 py-2 text-white transition hover:bg-forestGreenHover"
      >
        Log out
      </a>
    {:else}
      <a
        href="/login"
        class="rounded-sm border border-forestGreen px-8 py-2 text-forestGreen transition hover:bg-ghostHoverLight dark:border-white dark:text-white dark:hover:bg-ghostHoverDark"
      >
        Login
      </a>
      <a
        href="/signup"
        class="rounded-sm bg-forestGreen px-8 py-2 text-white transition hover:bg-forestGreenHover"
      >
        Sign up
      </a>
    {/if}
    <ButtonTheme />
  </nav>

  <button
    class="flex items-center text-forestGreen dark:text-white md:hidden"
    on:click={toggleMenu}
    aria-label="Toggle menu"
  >
    {#if menuOpen}
      ✖
    {:else}
      ☰
    {/if}
  </button>

  {#if menuOpen}
    <div
      class="absolute right-4 top-16 rounded-md bg-white p-4 shadow-md transition-colors duration-300 dark:bg-navbarDark"
    >
      {#if $user}
        <a
          href="/profile"
          class="mb-2 block w-full border-2 border-forestGreen px-4 py-2 text-forestGreen transition hover:bg-ghostHoverLight dark:border-white dark:text-white dark:hover:bg-ghostHoverDark"
        >
          Profile
        </a>
      {:else}
        <a
          href="/login"
          class="mb-2 block w-full border-2 border-forestGreen px-4 py-2 text-forestGreen transition hover:bg-ghostHoverLight dark:border-white dark:text-white dark:hover:bg-ghostHoverDark"
        >
          Login
        </a>
        <a
          href="/signup"
          class="block w-full bg-forestGreen px-4 py-2 text-white transition hover:bg-forestGreenHover"
        >
          Sign up
        </a>
      {/if}
    </div>
  {/if}
</header>
