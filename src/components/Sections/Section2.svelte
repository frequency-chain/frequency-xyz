<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
</script>

<SectionWrapper id="section2" classes="text-cream bg-navy">
  <!-- Section Content -->
  <div class="freq-container flex justify-center gap-6 py-[6%]">
    <!-- Mobile section number -->
    <div class="h-min origin-center -rotate-90 self-end font-bold sm:text-75 md:text-100 lg:hidden">.02</div>
    <section class="flex gap-6 sm:flex-col sm:items-end lg:flex-row lg:items-start">
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
  </div>

  <!-- Section Image -->
  <div class="flex-1">image coming soon</div>
</SectionWrapper>
