<script lang="ts">
  import Founders from '../Founders.svelte';
  import SectionNumber from '../SectionNumber.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section5Wave from './Section5Wave.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper
  id="section5"
  classes="relative bg-indigo flex sm:flex-col vertical-lg:flex-col lg:flex-row sm:pt-[50px] vertical-lg:pt-[50px] lg:pt-0"
>
  <!-- Image -->
  <div class="absolute bottom-0 left-0 flex h-full w-full overflow-hidden sm:hidden lg:block vertical-lg:hidden">
    <Section5Wave />
    <span class="absolute bottom-0 right-0 w-full border-b-4 border-darkIndigo" />
  </div>

  <!-- Content -->
  <div
    class="freq-container right-0 top-0 flex h-full sm:w-full sm:flex-col sm:gap-12 lg:absolute lg:w-[70%] lg:flex-row lg:items-end lg:justify-around lg:gap-0 lg:px-6 vertical-lg:relative vertical-lg:w-full vertical-lg:flex-col vertical-lg:items-start"
  >
    <section class="relative flex flex-col gap-6 sm:max-w-[800px] lg:max-w-[640px] lg:pb-[80px] lg:pr-[80px]">
      <SlideIn>
        <h2 class="title-75 text-yellow lg:max-w-[600px]">The Core of Our Technology</h2>
      </SlideIn>
      <SectionParagraph classes="md:pr-[140px] lg:px-0 text-cream">
        The creators of Frequency are at the forefront of innovation. They've created the Decentralized Social
        Networking Protocol (DSNP), an open-source solution that establishes a shared social graph independent of
        specific applications or centralized platforms.
      </SectionParagraph>
      <a href="https://docs.frequency.xyz/" target="_blank"
        ><button
          class="max-w-[200px] border-2 border-cream px-10 py-3 text-xs font-semibold text-cream transition-colors duration-500 hover:bg-cream hover:bg-opacity-30"
          >Learn More</button
        ></a
      >
      <SectionNumber classes="text-cream sm:hidden lg:block mr-[70px] bottom-4 right-0 vertical-lg:hidden"
        >.05</SectionNumber
      >
    </section>

    <Founders />
  </div>
  <SectionNumber classes="text-cream bottom-4 lg:hidden vertical-lg:block">.05</SectionNumber>
</SectionWrapper>
