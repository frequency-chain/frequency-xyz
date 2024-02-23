<script lang="ts">
  import Founders from '../Founders.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section5Wave from './Section5Wave.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="section5" classes="relative bg-indigo flex sm:flex-col lg:flex-row sm:pt-[50px] lg:pt-0">
  <!-- Image -->
  <div class="absolute bottom-0 left-0 flex h-full w-full sm:hidden lg:block">
    <Section5Wave />
    <span class="absolute bottom-0 right-0 w-[70%] border-b-4 border-darkIndigo" />
  </div>

  <!-- Content -->
  <div
    class="freq-container right-0 flex sm:relative sm:w-full sm:flex-col sm:gap-12 lg:absolute lg:w-[70%] lg:flex-row lg:items-end lg:justify-around lg:gap-0 lg:px-6"
  >
    <div class="relative sm:pr-[65px] md:pr-[120px]">
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
        class="absolute -rotate-90 text-[150px] font-black leading-none text-cream sm:-right-4 sm:bottom-0 sm:text-75 md:text-100 lg:-right-6 lg:bottom-[100px]"
      >
        .05
      </div>
    </div>
    <Founders />
  </div>
</SectionWrapper>
