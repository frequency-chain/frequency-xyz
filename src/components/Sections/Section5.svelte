<script lang="ts">
  import Founders from '../Founders.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="section5" classes="bg-indigo flex sm:flex-col lg:flex-row sm:pt-[50px] lg:pt-0">
  <!-- Image -->
  <div class="flex-1">img goes here</div>

  <!-- Content -->
  <div class="freq-container flex w-[auto] gap-10 sm:flex-col lg:flex-row lg:items-end">
    <div class="relative sm:pr-[65px] md:pr-[140px]">
      <section class="flex flex-col gap-6 sm:max-w-[800px] lg:max-w-[500px] lg:pb-[80px]">
        <SlideIn>
          <h2 class="title-75 text-yellow lg:max-w-[390px]">The Core of Our Technology</h2>
        </SlideIn>
        <p class="text-cream">
          The creators of Frequency are at the forefront of innovation. They've created the Decentralized Social
          Networking Protocol (DSNP), an open-source solution that establishes a shared social graph independent of
          specific applications or centralized platforms.
        </p>
        <button
          class="max-w-[200px] border-2 border-cream px-10 py-3 text-xs font-semibold text-cream transition-colors duration-500 hover:bg-cream hover:bg-opacity-30"
          >Learn More</button
        >
      </section>
      <div
        class="absolute -rotate-90 font-bold leading-none text-cream sm:-right-6 sm:text-75 md:text-100 lg:bottom-[30px] lg:right-4"
      >
        .05
      </div>
    </div>
    <Founders />
  </div>
</SectionWrapper>
