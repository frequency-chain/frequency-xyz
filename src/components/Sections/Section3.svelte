<script lang="ts">
  import SlideIn from '../SlideIn.svelte';
  import Section3Wave from './Section3Wave.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import SplitSection from './SplitSection.svelte';
</script>

<SectionWrapper
  id="section3"
  classes="z-0 relative flex sm:justify-center md:justify-center overflow-hidden sm:pt-[40px]"
>
  <div class="absolute bottom-0 left-0 h-full w-[50%] sm:hidden lg:block">
    <Section3Wave />
  </div>

  <!-- Text Content -->
  <section class="flex h-full flex-1 justify-center sm:flex-col lg:flex-row">
    <SplitSection isLeft={true} classes="sm:pb-6 lg:pb-0">
      <SlideIn>
        <h2 class="title-75 max-w-[800px] text-right text-navy">Take Your Content & Relationships With You</h2>
      </SlideIn>
    </SplitSection>
    <SplitSection isLeft={false} classes="lg:border-b-[5px] lg:border-yellow bg-teal">
      <div class="text-cream sm:mb-[80px] sm:max-w-[800px] sm:pr-[65px] sm:pt-6 md:pr-[50px] lg:mr-0 lg:max-w-[450px]">
        Your followers and friends are yours to keep, with complete control in your hands. Frequency ensures that you
        can seamlessly bring your content and connections along to any exciting new experience within the Frequency
        Network. If you love experimenting, you can post to multiple experiences at once using your Frequency identity,
        which links you to the entire network of Frequency apps.
      </div>
    </SplitSection>
  </section>
  <div
    class="absolute -rotate-90 text-[150px] font-black leading-none text-cream sm:-right-4 sm:bottom-[40px] sm:text-75 md:text-100 lg:-right-6 lg:bottom-[40px]"
  >
    .03
  </div>
</SectionWrapper>
