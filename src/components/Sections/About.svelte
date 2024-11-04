<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SectionContent from '../SectionContent.svelte';
</script>

<SectionWrapper id="about" classes="text-cream bg-navy sm:pb-[40px] lg:pb-0 vertical-lg:min-h-[550px]">
  <SectionContent classes="flex gap-12 sm:flex-col sm:items-end lg:flex-row lg:items-start justify-center">
    <div class="flex gap-4 text-right sm:items-end lg:items-start">
      <SlideIn>
        <h2 class="title-100 -mt-[9px] sm:max-w-[280px] sm:pr-5 lg:max-w-[320px]">Taking back control</h2>
      </SlideIn>
    </div>

    <SectionParagraph
      classes="text-left paragraph-spacing-right lg:pl-0 sm:pb-[100px] lg:pb-0 sm:pr-5  sm:max-w-[515px] lg:max-w-auto"
    >
      With Frequency, you will have a choice in how your favorite applications and websites utilize your data. Obtain
      control over your privacy and how your data is shared.
    </SectionParagraph>
  </SectionContent>
</SectionWrapper>
