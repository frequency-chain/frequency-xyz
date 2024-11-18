<script lang="ts">
  import { Button } from '@frequency-chain/style-guide';
  import SectionWrapper from './SectionWrapper.svelte';
  import TikTokTag from '../TikTokTag.svelte';
  import WavesTwo from '$lib/assets/waves-two.svg';
  import MeWeLogo from '$lib/assets/ecosystem/mewe.svg';
  import SoarLogo from '$lib/assets/ecosystem/soar.svg';

  const logoClasses = 'max-h-[120px] px-3 py-5 w-full sm:w-1/2 lg:w-1/4';
</script>

<SectionWrapper id="ecosystem">
  <div class="w-full overflow-hidden">
    <div class="h-[36px] bg-white lg:h-[61px]"></div>
    <div class="relative mb-[-36px] bg-navy lg:mb-[-61px]">
      <img class="relative top-[-36px] z-10 max-w-none lg:top-[-61px] lg:w-full" alt="" src={WavesTwo} />
    </div>
  </div>
  <div class="relative mt-[-100px] bg-navy pb-f64 md:pb-f120">
    <section class="freq-container flex items-center md:px-52">
      <div class="flex w-full flex-col gap-f24 lg:w-2/3">
        <h1 class="title-70 relative z-10 font-title text-white">
          Growing into a better <br class="hidden md:inline" />Future Together
        </h1>
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
    <h1 class="title-70 mb-6 text-center font-title text-primary">Companies in the Frequency Ecosystem</h1>
    <div class="flex w-full flex-wrap justify-around p-2 md:p-6">
      <img class={logoClasses} alt="MeWe" src={MeWeLogo} />
      <img class={logoClasses} alt="Soar" src={SoarLogo} />
    </div>
  </section>
</SectionWrapper>
