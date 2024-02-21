<script lang="ts">
  import SectionNavigation from '../components/Sections/SectionNavigation.svelte';
  import Sections from '../components/Sections/Sections.svelte';
  import Section1 from '../components/Sections/Section1.svelte';
  import Section2 from '../components/Sections/Section2.svelte';
  import Section3 from '../components/Sections/Section3.svelte';
  import Section4 from '../components/Sections/Section4.svelte';
  import Section5 from '../components/Sections/Section5.svelte';
  import Header from '../components/Header/Header.svelte';

  $: section = 1;

  const indigo = '#5E69FF';
  const cream = '#FEFAF3';

  const logoMap = new Map([
    [1, { logo: indigo, nav: 'navy' }],
    [2, { logo: cream, nav: 'cream' }],
    [3, { logo: indigo, nav: 'cream' }],
    [4, { logo: indigo, nav: 'navy' }],
    [5, { logo: cream, nav: 'cream' }],
  ]);

  $: logoHex = logoMap.get(section)?.logo;
  $: navColor = logoMap.get(section)?.nav;
</script>

<div class="relative lg:max-w-[100vw] xl:max-w-page">
  <div class="absolute top-0 z-50 w-full"><Header {logoHex} {navColor} /></div>
  <Sections bind:section sectionCount={5}>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </Sections>
  <SectionNavigation bind:section />
</div>
