<script lang="ts">
  import { Header } from '@frequency-chain/style-guide';
  import { base } from '$app/paths';
  import { page } from '$app/state';

  let menuItems = $derived([
    { label: 'Mission', href: base + '/#mission', viewportHighlightId: 'mission' },
    { label: 'About', href: base + '/#about', viewportHighlightId: 'about' },
    { label: 'Users', href: base + '/#users', viewportHighlightId: 'users' },
    { label: 'Developers', href: base + '/#developers', viewportHighlightId: 'developers' },
    { label: 'Ecosystem', href: base + '/#ecosystem', viewportHighlightId: 'ecosystem' },
    { label: 'Contact', href: base + '/#contact', viewportHighlightId: 'contact' },
    {
      label: 'Developer Portal',
      href: base + '/dev-portal',
      isButton: true,
      isActive: page.url.pathname === `${base}/dev-portal/`,
    },
  ]);
</script>

<div class="sticky top-0 z-50 mb-4 w-full bg-white">
  <Header highlightMarginTop="-90px" innerClass="freq-container-padding" {menuItems} logoLink={base + '/'} />
</div>
