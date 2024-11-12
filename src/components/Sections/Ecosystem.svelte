<script lang="ts">
  import { Button, Typography } from '@frequency-chain/style-guide';
  import SectionWrapper from './SectionWrapper.svelte';
  import TicTokTag from '../TikTokTag.svelte';
  import WavesTwo from '$lib/assets/waves-two.svg';
  import MeWeLogo from '$lib/assets/ecosystem/mewe.svg';
  import SoarLogo from '$lib/assets/ecosystem/soar.svg';
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
      <div class="flex w-full flex-col lg:w-2/3">
        <Typography tag="h0" class="relative z-10 font-title text-white">
          Growing into a better <br class="hidden md:inline" />Future Together
        </Typography>
        <p class="my-6 text-white md:pr-20">
          Frequency is leading a new era of social networking, empowering businesses and apps to help users unlock the
          value of their data and connections. Chosen as the core infrastructure for Project Liberty’s “People’s Bid” to
          acquire TikTok US, Frequency fosters a collaborative, decentralizing environment where communities can thrive
          around shared values, driving social impact, creativity, and growth.
        </p>
        <TicTokTag class="my-6 max-w-[300px] self-center md:self-start lg:hidden" />
        <div class="my-6 self-center md:self-start">
          <Button size="full" class="max-w-[400px]" href="https://thepeoplesbid.com/"
            >Learn About the People's Bid</Button
          >
        </div>
      </div>
      <TicTokTag class="hidden w-full lg:flex lg:w-1/3" />
    </section>
  </div>
  <section class="freq-container py-10">
    <Typography tag="h1" class="mb-6 text-center font-title text-navyLight">
      Companies in the Frequency Ecosystem
    </Typography>
    <div class="flex w-full flex-wrap justify-around p-2 md:p-6">
      <img class="m-2 max-w-[300px] p-2 sm:m-2 md:m-2" alt="MeWe" src={MeWeLogo} />
      <img class="m-2 max-w-[300px] p-2 sm:m-2 md:m-2" alt="Soar" src={SoarLogo} />
    </div>
  </section>
</SectionWrapper>
