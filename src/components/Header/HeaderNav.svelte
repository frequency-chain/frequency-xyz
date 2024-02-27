<script lang="ts">
  import NavItems from './NavItems.svelte';
  export let textColor = 'navy';
  export let section: number;
</script>

<nav aria-label="Main" class="flex-wrap gap-4 font-title text-sm uppercase sm:hidden md:flex lg:flex">
  <NavItems {textColor} bind:section />
</nav>
