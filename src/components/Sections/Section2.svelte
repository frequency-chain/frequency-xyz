<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section2Wave from './Section2Wave.svelte';
</script>

<SectionWrapper id="section2" classes="relative text-cream bg-navy sm:pb-[140px] lg:pb-0">
  <!-- Mobile section number -->
  <div
    class="absolute left-0 h-min origin-center -rotate-90 font-bold sm:-left-3 sm:bottom-[100px] sm:text-75 md:bottom-[100px] md:text-100 lg:hidden"
  >
    .02
  </div>

  <section
    class="sm:freq-container flex gap-6 sm:flex-col sm:items-end sm:pl-[90px] md:pl-[140px] lg:flex-row lg:items-start"
  >
    <div class="flex gap-4 sm:items-end lg:items-start">
      <!-- Desktop section number -->
      <div
        class="h-min origin-center -rotate-90 sm:hidden sm:font-bold md:text-100 lg:block lg:text-[50px] lg:font-normal"
      >
        .02
      </div>
      <SlideIn>
        <h2 class="title-100 -mt-[9px] sm:max-w-[735px] lg:max-w-[320px]">Taking back control</h2>
      </SlideIn>
    </div>
    <p class="sm:max-w-[735px] lg:max-w-[320px] lg:text-left">
      With Frequency, you will have a choice in how your favorite applications and websites utilize your data. Obtain
      control over your privacy and how your data is shared.
    </p>
  </section>

  <!-- Section Image -->
  <div class="absolute -bottom-1 left-0 h-[300px] w-[100%]">
    <Section2Wave />
    <span
      class="absolute bottom-0 right-0 border-indigo sm:w-[0px] md:w-[50%] md:border-b-4 lg:w-[20%] lg:border-b-8"
    />
  </div>
</SectionWrapper>
