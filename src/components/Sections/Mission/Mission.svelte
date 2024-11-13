<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import MissionItems from '$components/Sections/Mission/MissionItems.svelte';
  import MissionStatement from '$components/Sections/Mission/MissionStatement.svelte';
  import MissionHeader from '$components/Sections/Mission/MissionHeader.svelte';
</script>

<SectionWrapper id="mission" classes="py-f64">
  <section class="freq-container mb-f64">
    <MissionHeader />
    <MissionItems />
  </section>

  <MissionStatement />
</SectionWrapper>
