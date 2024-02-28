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
  <SectionNumber classes="lg:hidden bottom-4 z-50" isLeft={true}>.02</SectionNumber>

  <SectionContent classes="z-50 flex gap-6 sm:flex-col sm:items-end lg:flex-row lg:items-start justify-center">
    <div class="flex gap-4 text-right sm:items-end lg:items-start">
      <!-- Desktop section number -->
      <SectionNumber
        classes="md:text-100 lg:block lg:text-[50px] lg:font-normal relative lg:bottom-auto lg:right-auto sm:hidden"
        >.02</SectionNumber
      >
      <SlideIn>
        <h2 class="title-100 -mt-[9px] sm:max-w-[735px] lg:max-w-[320px]">Taking back control</h2>
      </SlideIn>
    </div>

    <SectionParagraph classes="text-left">
      With Frequency, you will have a choice in how your favorite applications and websites utilize your data. Obtain
      control over your privacy and how your data is shared.
    </SectionParagraph>
  </SectionContent>

  <!-- Section Image -->
  <div class="absolute bottom-0 left-0 h-[300px] w-[100%]">
    <Section2Wave />
    <span
      class="absolute right-0 sm:w-[0px] md:-bottom-[7px] md:w-[40%] md:border-b-[7px] md:border-rose lg:bottom-0 lg:w-[21%] lg:border-b-[8px] lg:border-indigo"
    />
  </div>
</SectionWrapper>
