<script lang="ts">
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper
  id="section4"
  classes="text-right freq-container flex sm:justify-center md:justify-center lg:px-0 sm:pb-[50px] lg:pb-0"
>
  <div
    class="relative w-full border-navy sm:max-w-[800px] sm:border-0 sm:pl-[75px] md:border-0 md:pl-[140px] lg:w-full lg:max-w-full lg:border-b-8 lg:pl-0"
  >
    <section class="flex gap-6 self-start text-navy sm:flex-col lg:flex-row-reverse lg:justify-end">
      <SlideIn>
        <h2 class="title-75 lg:max-w-[500px]">Publicly Vote for Your Preferred Apps</h2>
      </SlideIn>
      <p class="lg:max-w-[500px]">
        Frequency will soon introduce a unique feature that enables you to vote for the apps and services on the
        Frequency network that you love. This feature will also permit you to publicly alter your choices, to endorse
        and, if needed, reconsider your support for apps and services, promoting ethical behavior and accountability.
      </p>
    </section>
    <div
      class="absolute bottom-14 h-min w-[min-content] -rotate-90 font-bold leading-none text-yellow sm:-left-6 sm:bottom-0 sm:text-75 md:left-0 md:text-100 lg:-right-16 lg:bottom-[48px] lg:left-[auto] lg:text-200"
    >
      .04
    </div>
  </div>
</SectionWrapper>
