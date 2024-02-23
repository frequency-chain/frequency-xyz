<script lang="ts">
  import SlideIn from '../SlideIn.svelte';
  import Section4Wave from './Section4Wave.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper
  id="section4"
  classes="text-right freq-container flex sm:justify-center md:justify-center lg:px-0 sm:pb-[50px] lg:pb-0 relative"
>
  <div
    class="relative w-full sm:max-w-[800px] sm:pb-[60px] sm:pl-[75px] md:pl-[140px] md:pt-0 lg:w-full lg:max-w-full lg:p-0 lg:pl-[140px]"
  >
    <section class="flex self-start text-navy sm:flex-col sm:gap-6 lg:flex-row-reverse lg:justify-end lg:gap-12">
      <SlideIn>
        <h2 class="title-75 lg:max-w-[500px] lg:text-left">Publicly Vote for Your Preferred Apps</h2>
      </SlideIn>
      <p class="lg:max-w-[500px]">
        Frequency will soon introduce a unique feature that enables you to vote for the apps and services on the
        Frequency network that you love. This feature will also permit you to publicly alter your choices, to endorse
        and, if needed, reconsider your support for apps and services, promoting ethical behavior and accountability.
      </p>
    </section>
  </div>
  <div
    class="absolute h-min w-[min-content] -rotate-90 font-bold leading-none text-yellow sm:-left-6 sm:bottom-[100px] sm:text-75 md:left-0 md:text-100 lg:-right-6 lg:bottom-[120px] lg:left-[auto] lg:text-[120px]"
  >
    .04
  </div>

  <div class="absolute bottom-0 left-0 flex h-full w-full">
    <span class="absolute bottom-0 left-0 border-b-8 border-yellow sm:w-[0px] md:w-[25%]" />
    <Section4Wave />
  </div>
</SectionWrapper>
