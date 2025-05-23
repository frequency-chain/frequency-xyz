<script lang="ts">
  import { Button } from '@frequency-chain/style-guide';
  import SectionWrapper from './SectionWrapper.svelte';
  import TikTokTag from '../TikTokTag.svelte';
  import MeWeLogo from '../../lib/assets/Ecosystem/mewe-logo.svg';
  import SoarLogo from '../../lib/assets/Ecosystem/soar-logo.svg';
  import WeAre8Logo from '../../lib/assets/Ecosystem/weare8.svg';
  import SlideIn from '../SlideIn.svelte';
  import WavesTwo from '../../lib/assets/Ecosystem/waves-two.svg';

  const logos = [
    { alt: 'MeWe', src: MeWeLogo },
    { alt: 'WeAre8', src: WeAre8Logo },
    { alt: 'Soar', src: SoarLogo },
  ];
</script>

<SectionWrapper id="ecosystem">
  <div class="w-full overflow-hidden">
    <div class="h-[36px] bg-white lg:h-[61px]"></div>
    <div class="bg-black relative mb-[-36px] lg:mb-[-61px]">
      <div
        class="background bg-waves-two relative top-[-36px] z-10 h-[240px] max-w-none min-w-[1000px] bg-contain bg-top bg-repeat-x md:h-[260px] lg:top-[-61px] lg:h-[300px] lg:w-full xl:h-[360px]"
        style={`--waves-two: url("${WavesTwo}");`}
      ></div>
    </div>
  </div>
  <div class="bg-black pb-f64 md:pb-f96 relative mt-[-100px]">
    <section class="freq-container flex items-center md:px-52">
      <div class="gap-f24 z-10 flex w-full flex-col lg:w-2/3">
        <SlideIn>
          <h1 class="title-70 font-title font-bold relative z-10 text-white">
            Growing into a better <br class="hidden md:inline" />Future Together
          </h1>
        </SlideIn>
        <p class="body md:mb-f32 text-white md:pr-20">
          Frequency is leading a new era of social networking, empowering businesses and apps to help users unlock the
          value of their data and connections. Chosen as the core infrastructure for Project Liberty’s “People’s Bid” to
          acquire TikTok US, Frequency fosters a collaborative, decentralizing environment where communities can thrive
          around shared values, driving social impact, creativity, and growth.
        </p>
        <TikTokTag class="my-6 max-w-[300px] self-center md:self-start lg:hidden" />
        <div class="self-center md:self-start">
          <Button intent="outlined-light" size="lg" href="https://thepeoplesbid.com/">
            Learn About the People's Bid
          </Button>
        </div>
      </div>
      <TikTokTag class="hidden w-full lg:flex lg:w-1/3" />
    </section>
  </div>
  <section class="freq-container py-f64">
    <SlideIn>
      <h1 class="title-70 font-title font-bold text-primary mb-6 text-center">Companies in the Frequency Ecosystem</h1>
    </SlideIn>
    <div class="flex w-full flex-wrap justify-around p-2 md:p-6">
      {#each logos as { alt, src }, index (index)}
        <img id={`logo-${index}`} class="max-h-[120px] w-full px-3 py-5 sm:w-1/2 lg:w-1/4" {alt} {src} />
      {/each}
    </div>
  </section>
</SectionWrapper>

<style>
  .bg-waves-two {
    background-image: var(--waves-two);
  }
</style>
