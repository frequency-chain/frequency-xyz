<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section2Wave from './Section2Wave.svelte';
  import SectionNumber from '../SectionNumber.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SectionContent from '../SectionContent.svelte';
</script>

<SectionWrapper id="section2" classes="text-cream bg-navy sm:pb-[40px] lg:pb-0 vertical-lg:min-h-[550px]">
  <!-- Mobile section number -->
  <SectionNumber classes="lg:hidden bottom-4 z-20" isLeft={true}>.02</SectionNumber>

  <SectionContent classes="flex gap-12 sm:flex-col sm:items-end lg:flex-row lg:items-start justify-center">
    <div class="flex gap-4 text-right sm:items-end lg:items-start">
      <!-- Desktop section number -->
      <SectionNumber
        classes="md:text-100 lg:block lg:font-normal relative lg:bottom-auto lg:right-auto lg:top-[16px] sm:hidden"
        >.02</SectionNumber
      >
      <SlideIn>
        <h2 class="title-100 -mt-[9px] sm:max-w-[280px] lg:max-w-[320px]">Taking back control</h2>
      </SlideIn>
    </div>

    <SectionParagraph
      classes="text-left paragraph-spacing-right lg:pl-0 sm:pb-[100px] lg:pb-0 md:max-w-[615px] sm:max-w-auto lg:max-w-auto"
    >
      With Frequency, you will have a choice in how your favorite applications and websites utilize your data. Obtain
      control over your privacy and how your data is shared.
    </SectionParagraph>
  </SectionContent>

  <!-- Section Image -->
  <div class="absolute bottom-0 left-0 h-full w-full">
    <Section2Wave />
  </div>
</SectionWrapper>
