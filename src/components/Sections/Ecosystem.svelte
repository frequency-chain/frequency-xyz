<script lang="ts">
  import { Button } from '@frequency-chain/style-guide';
  import SectionWrapper from './SectionWrapper.svelte';
  import TikTokTag from '../TikTokTag.svelte';
  import MeWeLogo from '../../lib/assets/Ecosystem/mewe-logo.svg';
  import SoarLogo from '../../lib/assets/Ecosystem/soar-logo.svg';
  import WeAre8Logo from '../../lib/assets/Ecosystem/weare8.svg';
  import SlideIn from '../SlideIn.svelte';
</script>

<SectionWrapper id="ecosystem">
  <div class="w-full overflow-hidden">
    <div class="h-[36px] bg-white lg:h-[61px]"></div>
    <div class="relative mb-[-36px] bg-navy lg:mb-[-61px]">
      <div
        class="waves-bg-img background relative top-[-36px] z-10 h-[240px] min-w-[1000px] max-w-none bg-contain bg-top bg-repeat-x md:h-[260px] lg:top-[-61px] lg:h-[300px] lg:w-full xl:h-[360px]"
      ></div>
    </div>
  </div>
  <div class="relative mt-[-100px] bg-navy pb-f64 md:pb-f96">
    <section class="freq-container flex items-center md:px-52">
      <div class="z-10 flex w-full flex-col gap-f24 lg:w-2/3">
        <SlideIn>
          <h1 class="title-70 relative z-10 font-title text-white">
            Growing into a better <br class="hidden md:inline" />Future Together
          </h1>
        </SlideIn>
        <p class="body text-white md:mb-f32 md:pr-20">
          Frequency is leading a new era of social networking, empowering businesses and apps to help users unlock the
          value of their data and connections. Chosen as the core infrastructure for Project Liberty’s “People’s Bid” to
          acquire TikTok US, Frequency fosters a collaborative, decentralizing environment where communities can thrive
          around shared values, driving social impact, creativity, and growth.
        </p>
        <TikTokTag class="my-6 max-w-[300px] self-center md:self-start lg:hidden" />
        <div class="self-center md:self-start">
          <Button size="full" class="max-w-[400px]" href="https://thepeoplesbid.com/">
            Learn About the People's Bid
          </Button>
        </div>
      </div>
      <TikTokTag class="hidden w-full lg:flex lg:w-1/3" />
    </section>
  </div>
  <section class="freq-container py-f56">
    <SlideIn>
      <h1 class="title-70 mb-6 text-center font-title text-primary">Companies in the Frequency Ecosystem</h1>
    </SlideIn>
    <div class="flex w-full flex-wrap justify-around p-2 md:p-6">
      <img class="logo" alt="MeWe" src={MeWeLogo} />
      <img class="logo" alt="WeAre8" src={WeAre8Logo} />
      <img class="logo" alt="Soar" src={SoarLogo} />
    </div>
  </section>
</SectionWrapper>

<style lang="postcss">
  .logo {
    @apply max-h-[120px] w-full px-3 py-5 sm:w-1/2 lg:w-1/4;
  }

  .waves-bg-img {
    background-image: url('../../lib/assets/Ecosystem/waves-two.svg?url');
  }
</style>
