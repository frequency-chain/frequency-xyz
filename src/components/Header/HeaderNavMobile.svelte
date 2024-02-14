<script lang="ts">
  import NavItems from './NavItems.svelte';

  export let isOpen: boolean;
</script>

<div
  class={`fixed right-0 top-0 w-[100vw] flex-col gap-6 overflow-hidden bg-teal transition-[height] duration-[1s] sm:flex md:hidden lg:hidden ${isOpen ? 'h-[100vh]' : 'h-0'}`}
>
  <nav class="mt-[60px] flex flex-col gap-4 px-[12%] text-xl uppercase text-cream">
    <NavItems />
  </nav>
</div>
