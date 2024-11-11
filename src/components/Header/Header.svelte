<script lang="ts">
  import { Header } from '@frequency-chain/style-guide';
  import { base } from '$app/paths';

  const menuItems = [
    { label: 'Mission', href: base + '#mission', viewportHighlightId: 'mission' },
    { label: 'About', href: base + '#about', viewportHighlightId: 'about' },
    { label: 'Users', href: base + '#users', viewportHighlightId: 'users' },
    { label: 'Developers', href: base + '#developers', viewportHighlightId: 'developers' },
    { label: 'Contact', href: base + '#contact', viewportHighlightId: 'contact' },
    { label: 'Developer Portal', href: base + '/docs', isButton: true, isActive: true },
  ];
</script>

<div class="sticky top-0 z-50 mb-4 w-full bg-white">
  <Header {menuItems} />
</div>
