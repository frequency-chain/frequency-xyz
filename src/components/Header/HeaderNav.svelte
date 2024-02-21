<script>
  import NavItems from './NavItems.svelte';
  export let textColor = 'navy';
</script>

<nav class="flex-wrap gap-4 font-title text-sm uppercase sm:hidden md:flex lg:flex">
  <NavItems {textColor} />
</nav>
