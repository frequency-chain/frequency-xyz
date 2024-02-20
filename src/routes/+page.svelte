<script lang="ts">
  import SectionNavigation from '../components/Sections/SectionNavigation.svelte';
  import Sections from '../components/Sections/Sections.svelte';
  import Section1 from '../components/Sections/Section1.svelte';
  import Section2 from '../components/Sections/Section2.svelte';
  import Section3 from '../components/Sections/Section3.svelte';
  import Section4 from '../components/Sections/Section4.svelte';
  import Section5 from '../components/Sections/Section5.svelte';
  let section = 1;
</script>

<div class="relative lg:max-w-[100vw] xl:max-w-page">
  <Sections bind:section sectionCount={5}>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </Sections>
  <SectionNavigation bind:section />
</div>
