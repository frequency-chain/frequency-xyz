<script lang="ts">
  import SectionDocs from '../../components/Sections/SectionDocs.svelte';
  import SectionNavigation from '../../components/Sections/SectionNavigation.svelte';
  import Sections from '../../components/Sections/Sections.svelte';
  import { page } from '$app/stores';
  import Header from '../../components/Header/Header.svelte';
  $: section = 1;
  const sectionTitles = ['Introduction'];
  const brightBlue = '#5E69FF';
  const cream = '#FEFAF3';

  const logoMap = new Map([
    [1, { logo: cream, nav: 'navy' }],
    [2, { logo: cream, nav: 'cream' }],
    [3, { logo: brightBlue, nav: 'cream' }],
    [4, { logo: brightBlue, nav: 'navy' }],
    [5, { logo: cream, nav: 'cream' }],
  ]);

  // Section navigation titles for Aria

  $: logoHex = logoMap.get(section)?.logo;
  $: navColor = logoMap.get(section)?.nav;
  $: baseUrl = $page.url.protocol + '//' + $page.url.host;
</script>

<div class="min-h-[calc(100vh-100px)]">
  <div class="relative lg:max-w-[100vw] xl:max-w-page">
    <div class="absolute top-0 z-50 w-full"><Header {logoHex} {navColor} bind:section /></div>
    <Sections bind:section sectionCount={1}>
      <SectionDocs />
    </Sections>
    <SectionNavigation bind:section {sectionTitles} />
  </div>
</div>
