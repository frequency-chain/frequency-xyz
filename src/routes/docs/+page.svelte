<script lang="ts">
  import DocsBody from './components/DocsBody.svelte';
  import Header from '../../components/Header/Header.svelte';
  $: section = 1;
  const brightBlue = '#5E69FF';
  const cream = '#FEFAF3';

  const logoMap = new Map([
    [1, { logo: brightBlue, nav: 'navy' }],
    [2, { logo: cream, nav: 'cream' }],
    [3, { logo: brightBlue, nav: 'cream' }],
    [4, { logo: brightBlue, nav: 'navy' }],
    [5, { logo: cream, nav: 'cream' }],
  ]);

  // Section navigation titles for Aria

  $: logoHex = logoMap.get(section)?.logo;
  $: navColor = logoMap.get(section)?.nav;
  // $: baseUrl = $page.url.protocol + '//' + $page.url.host;
</script>

<div class="absolute top-0 z-50 w-full"><Header {logoHex} {navColor} bind:section /></div>
<div class={`relative w-[100vw] min-w-full sm:pt-[80px] lg:pt-[140px] vertical-lg:w-[100%]`}>
  <DocsBody />
</div>
