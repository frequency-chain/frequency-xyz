<script lang="ts">
  import { Header } from '@frequency-chain/style-guide';
  import { onMount } from 'svelte';

  export let logoHex: string = '';
  export let navColor: string = '';
  export let section: number;

  const MOBILE_NAV_THRESHOLD = 900;

  $: isNavOpen = false;
  $: textColor = `text-${navColor}`;

  let innerWidth = window.innerWidth;

  onMount(() => {
    const handleResize = () => {
      innerWidth = window.innerWidth;
      let hasMobileNav = innerWidth <= MOBILE_NAV_THRESHOLD;
      if (!hasMobileNav) isNavOpen = false;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const menuItems = [
    { label: 'About', href: '/' },
    { label: 'Dev Docs', href: 'https://docs.frequency.xyz/', isExternal: true },
    { label: 'Newsroom', href: 'https://medium.com/one-frequency', isExternal: true },
    { label: 'Contact', href: 'mailto:info@frequency.xyz' },
  ];
</script>

<div class="md:freq-container absolute top-0 z-50 w-full max-w-page md:pt-[30px]">
  <Header logoType="primary" {logoHex} class={textColor} {menuItems} bind:section />
</div>
