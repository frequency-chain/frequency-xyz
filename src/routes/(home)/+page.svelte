<script lang="ts">
  import { page } from '$app/stores';
  import JoinSocials from '../../components/JoinSocials.svelte';
  import SectionNavigation from '../../components/Sections/SectionNavigation.svelte';
  import Sections from '../../components/Sections/Sections.svelte';
  import Section1 from '../../components/Sections/Section1.svelte';
  import Section2 from '../../components/Sections/Section2.svelte';
  import Section3 from '../../components/Sections/Section3.svelte';
  import Section4 from '../../components/Sections/Section4.svelte';
  import Section5 from '../../components/Sections/Section5.svelte';
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
  const sectionTitles = ['Introduction', 'Control', 'Portability', 'Vote', 'Technology'];

  $: logoHex = logoMap.get(section)?.logo;
  $: navColor = logoMap.get(section)?.nav;
  $: baseUrl = $page.url.protocol + '//' + $page.url.host;
</script>

<svelte:head>
  <meta property="og:title" content="Frequency" />
  <meta property="og:url" content={$page.url.toString()} />
  <meta
    property="og:description"
    content="Frequency fuels the Social Web, putting control & data privacy in your hands."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={`${baseUrl}/og-preview.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image" content={`${baseUrl}/og-square.png`} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1200" />
  <meta property="og:image" content={`${baseUrl}/og-thumb.png`} />
  <meta property="og:image:width" content="200" />
  <meta property="og:image:height" content="200" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={`${baseUrl}/og-twitter.png`} />
</svelte:head>

<div class="min-h-[calc(100vh-100px)]">
  <div class="relative lg:max-w-[100vw] xl:max-w-page">
    <div class="absolute top-0 z-50 w-full"><Header {logoHex} {navColor} bind:section /></div>
    <Sections bind:section sectionCount={5}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Sections>
    <SectionNavigation bind:section {sectionTitles} />
  </div>
  <div class="freq-container mt-[150px]">
    <JoinSocials />
  </div>
</div>
