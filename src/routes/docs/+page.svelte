<script lang="ts">
  import { page } from '$app/stores';
  const baseUrl = $page.url.protocol + '//' + $page.url.host;

  // Placeholder colors or styles if required
  const topImageBg = '#FFFFFF'; // Background for the top section image block
</script>

<svelte:head>
  <meta property="og:title" content="Frequency Developer Portal" />
  <meta property="og:description" content="Build with Frequency. Your gateway to developer tools and resources." />
  <meta property="og:image" content={`${baseUrl}/dev-portal-og.png`} />
</svelte:head>

<style>
</style>
