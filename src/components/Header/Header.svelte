<script lang="ts">
  import { Header } from '@frequency-chain/style-guide';

  const logoHex = '#5E69FF';
  const navColor = 'navy';
  const textColor = `text-${navColor}`;

  const menuItems = [
    { label: 'About', href: '/' },
    { label: 'Dev Docs', href: '/docs', isExternal: false },
    { label: 'Newsroom', href: 'https://medium.com/one-frequency', isExternal: true },
    { label: 'Contact', href: 'mailto:info@frequency.xyz' },
  ];
</script>

<div class="sticky top-0 z-50 bg-white md:pt-[30px]">
  <Header logoType="primary" {logoHex} class={textColor} {menuItems} />
</div>
