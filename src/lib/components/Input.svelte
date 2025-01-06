<script>
  export let id = '';
  export let type = 'text';
  export let label = '';
  export let value = '';
  export let placeholder = '';
  export let error = '';
</script>

<div class="mb-4">
  <label for={id} class="block text-xs font-semibold">{label}</label>
  <input {id} {type} bind:value class="w-full rounded-sm border p-2" {placeholder} />
  {#if error}
    <p class="text-xs text-red-500">{error}</p>
  {/if}
</div>
