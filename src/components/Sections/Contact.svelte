<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SectionContent from '../SectionContent.svelte';
  import GetNotified from '../GetNotified/GetNotified.svelte';
</script>

<SectionWrapper id="contact" class="bg-navy text-white">
  <SectionContent class="freq-container">
    <SectionParagraph class="">Image</SectionParagraph>

    <GetNotified />
  </SectionContent>
</SectionWrapper>
