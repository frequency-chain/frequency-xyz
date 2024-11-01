<script lang="ts">
  import { Header } from '@frequency-chain/style-guide';

  export let logoHex: string = '';
  export let navColor: string = '';
  export let section: number;

  $: textColor = `text-${navColor}`;

  const menuItems = [
    { label: 'About', href: '/' },
    { label: 'Dev Docs', href: '/docs', isExternal: true },
    { label: 'Newsroom', href: 'https://medium.com/one-frequency', isExternal: true },
    { label: 'Contact', href: 'mailto:info@frequency.xyz' },
  ];
</script>

<div class="md:freq-container absolute top-0 z-50 w-full max-w-page md:pt-[30px]">
  <Header logoType="primary" {logoHex} class={textColor} {menuItems} bind:section />
</div>
