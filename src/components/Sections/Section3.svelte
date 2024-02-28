<script lang="ts">
  import SectionNumber from '../SectionNumber.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section3Wave from './Section3Wave.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import SplitSection from './SplitSection.svelte';
</script>

<SectionWrapper
  id="section3"
  classes="z-0 flex sm:justify-center md:justify-center overflow-hidden sm:pt-[40px] text-cream vertical-lg:min-h-[450px]"
>
  <!-- Desktop Wave -->
  <div class="absolute bottom-0 left-0 h-full w-[50%] sm:hidden lg:block">
    <Section3Wave />
  </div>

  <!-- Text Content -->
  <section class="flex h-full flex-1 justify-center sm:flex-col sm:pt-[100px] lg:flex-row">
    <SplitSection isLeft={true} classes="relative sm:pb-[100px] lg:pb-0">
      <SlideIn>
        <h2 class="title-75 text-right text-navy sm:max-w-[200px] md:max-w-[400px] lg:max-w-[540px]">
          Take Your Content & Relationships With You
        </h2>
      </SlideIn>
      <div class="z-10 sm:block lg:hidden">
        <Section3Wave />
        <span
          class="absolute -bottom-16 right-0 border-yellow sm:w-[calc(100%-510px)] sm:border-b-[5px] md:w-[calc(100%-600px)] md:border-b-[6px]"
        />
      </div>
    </SplitSection>
    <SplitSection
      isLeft={false}
      classes={`lg:border-b-[5px] h-full lg:border-yellow bg-teal lg:mr-0 transition-[height] sm:pt-[100px] duration-[2s] sm:pb-[80px]`}
    >
      <SectionParagraph classes="sm:pr-[100px] md:pr-[140px] lg:px-0">
        Take Your Content And Relationships With You. Your followers and friends are yours to keep, with complete
        control in your hands. Frequency ensures that you can seamlessly bring your content and connections along to any
        exciting new experience within the Frequency Network. If you love experimenting, you can post to multiple
        experiences at once using your Frequency identity, which links you to the entire network of Frequency apps.
      </SectionParagraph>
    </SplitSection>
  </section>
  <SectionNumber classes="bottom-4">.03</SectionNumber>
</SectionWrapper>
