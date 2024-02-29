<script lang="ts">
  import SectionNumber from '../SectionNumber.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section4Wave from './Section4Wave.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper
  id="section4"
  classes="text-right flex lg:px-0 sm:pb-[140px] lg:pb-0 justify-end vertical-lg:min-h-[450px]"
>
  <div class="sm:freq-container md:freq-container body relative h-full">
    <section
      class="sm:flex-end flex text-navy sm:flex-col sm:items-end sm:gap-6 lg:flex-row-reverse lg:items-start lg:justify-end lg:gap-12"
    >
      <SlideIn>
        <h2 class="title-75 sm:max-w-[500px] lg:max-w-[500px] lg:text-left">Publicly Vote for Your Preferred Apps</h2>
      </SlideIn>

      <SectionParagraph classes="paragraph-spacing-right lg:pl-0">
        Frequency will soon introduce a unique feature that enables you to vote for the apps and services on the
        Frequency network that you love. This feature will also permit you to publicly alter your choices, to endorse
        and, if needed, reconsider your support for apps and services, promoting ethical behavior and accountability.
      </SectionParagraph>
    </section>
  </div>
  <SectionNumber isLeft={true} classes="text-yellow sm:bottom-[100px] md:bottom-[120px] lg:text-200 lg:-right-[80px]"
    >.04</SectionNumber
  >

  <div class="absolute bottom-0 left-0 flex h-full w-full">
    <Section4Wave />
  </div>
</SectionWrapper>
