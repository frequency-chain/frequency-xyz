<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SectionContent from '../SectionContent.svelte';
  import GetNotified from '../GetNotified/GetNotified.svelte';
</script>

<SectionWrapper id="about" classes="text-white bg-navy">
  <SectionContent classes="freq-container">
    <SectionParagraph classes="">Image</SectionParagraph>

    <GetNotified />
  </SectionContent>
</SectionWrapper>
