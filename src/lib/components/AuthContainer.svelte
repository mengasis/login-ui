<script lang="ts">
  let { title = '', subtitle = '', children } = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-transparent p-4">
  <div class="w-full max-w-[450px] rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
    <div class="mb-8 text-center">
      {#if title}
        <h1 class="mb-2 text-2xl font-normal text-gray-900 dark:text-white">
          {title}
        </h1>
      {/if}
      {#if subtitle}
        <p class="text-sm text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      {/if}
    </div>
    {@render children?.()}
  </div>
</div>
