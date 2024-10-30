<script lang="ts">
  import JoinSocials from '../../components/JoinSocials.svelte';
  import SectionDocs from '../../components/Sections/SectionDocs.svelte';
  import SectionNavigation from '../../components/Sections/SectionNavigation.svelte';
  import Sections from '../../components/Sections/Sections.svelte';
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
  const sectionTitles = ['Introduction'];
</script>

<div class="min-h-[calc(100vh-100px)]">
  <div class="relative lg:max-w-[100vw] xl:max-w-page">
    <Sections bind:section sectionCount={1}>
      <SectionDocs />
    </Sections>
    <SectionNavigation bind:section {sectionTitles} />
  </div>
  <div class="freq-container mt-[150px]">
    <JoinSocials />
  </div>
</div>

<style>
</style>
