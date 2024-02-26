<script lang="ts">
  import JoinSocials from '../JoinSocials.svelte';
  import NavItems from './NavItems.svelte';

  export let isOpen: boolean;
  export let section: number;
</script>

<div
  class={`z-1 fixed right-0 top-0 z-10 w-[100vw] flex-col justify-between gap-6 overflow-scroll bg-navy px-[12%] font-title transition-[height] duration-[1s] sm:flex md:hidden lg:hidden ${isOpen ? 'h-[100vh]' : 'h-0'}`}
>
  <nav class="mt-[60px] flex flex-col gap-4 text-xl uppercase text-cream">
    <NavItems textColor="cream" bind:section isDesktop={false} />
  </nav>

  <div class="pb-[40px] font-sans text-cream">
    <JoinSocials />
  </div>

  <div class="absolute bottom-0 right-0 h-[200px] w-full overflow-hidden">
    <div
      class="absolute -bottom-1 z-[-1] h-[200px] w-full overflow-hidden bg-[url('src/lib/assets/mobileNav.svg')] bg-right-bottom bg-no-repeat"
    />
  </div>
</div>
