<script lang="ts">
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import SplitSection from './SplitSection.svelte';
</script>

<SectionWrapper id="section3" classes="z-0 relative flex sm:justify-center md:justify-center">
  <section class="flex h-full flex-1 justify-center sm:flex-col lg:flex-row">
    <SplitSection isLeft={true} classes="bg-cream sm:pb-6 lg:pb-0">
      <SlideIn>
        <h2 class="title-75 max-w-[800px] text-right text-navy">Take Your Content & Relationships With You</h2>
      </SlideIn>
    </SplitSection>
    <SplitSection isLeft={false} classes="lg:border-b-8 lg:border-yellow bg-teal">
      <div class="text-cream sm:mb-[80px] sm:max-w-[800px] sm:pr-[65px] md:pr-[50px] lg:mr-0 lg:max-w-[450px]">
        Take Your Content And Relationships With You. Your followers and friends are yours to keep, with complete
        control in your hands. Frequency ensures that you can seamlessly bring your content and connections along to any
        exciting new experience within the Frequency Network. If you love experimenting, you can post to multiple
        experiences at once using your Frequency identity, which links you to the entire network of Frequency apps.
      </div>
    </SplitSection>
  </section>
  <div
    class="absolute bottom-0 -rotate-90 text-[150px] font-black leading-none text-cream sm:-right-6 sm:bottom-[40px] sm:text-75 md:text-100 lg:-right-6 lg:bottom-[26px]"
  >
    .03
  </div>
</SectionWrapper>
