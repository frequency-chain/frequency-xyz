<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import MissionItems from '$components/Sections/Mission/MissionItems.svelte';
  import MissionStatement from '$components/Sections/Mission/MissionStatement.svelte';
  import MissionHeader from '$components/Sections/Mission/MissionHeader.svelte';
</script>

<SectionWrapper id="mission">
  <section class="freq-container pb-f96 pt-f64">
    <MissionHeader />
    <MissionItems />
  </section>

  <MissionStatement />
</SectionWrapper>
