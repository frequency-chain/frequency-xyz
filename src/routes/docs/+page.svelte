<script lang="ts">
  import JoinSocials from '../../components/JoinSocials.svelte';
  import SectionDocs from '../../components/Sections/SectionDocs.svelte';
  import SectionNavigation from '../../components/Sections/SectionNavigation.svelte';
  import Sections from '../../components/Sections/Sections.svelte';

  $: section = 1;
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
