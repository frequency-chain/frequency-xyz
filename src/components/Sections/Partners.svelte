<script lang="ts">
  import Founders from '../Founders.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper
  id="partners"
  classes="relative bg-brightBlue flex sm:flex-col lg:flex-row sm:pt-[50px] vertical-lg:pt-[50px] lg:pt-0"
>
  <section class="relative flex flex-col gap-6 sm:max-w-[800px] lg:max-w-[640px] lg:pb-[80px] lg:pr-[80px]">
    <SlideIn>
      <h2 class="title-75 text-yellow sm:pr-5 lg:max-w-[600px]">The Core of Our Technology</h2>
    </SlideIn>
    <SectionParagraph classes="sm:pr-5 md:pr-[140px] lg:px-0 text-white">
      The creators of Frequency are at the forefront of innovation. They've created the Decentralized Social Networking
      Protocol (DSNP), an open-source solution that establishes a shared social graph independent of specific
      applications or centralized platforms.
    </SectionParagraph>
    <a href="https://docs.frequency.xyz/" target="_blank"
      ><button
        class="max-w-[200px] border-2 border-white px-10 py-3 text-xs font-semibold text-white transition-colors duration-500 hover:bg-cream hover:bg-opacity-30"
        >Learn More</button
      ></a
    >
  </section>

  <Founders />
</SectionWrapper>
