<script lang="ts">
  import { Button } from '@frequency-chain/style-guide';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import CircleOne from '$components/Icons/CircleOne.svelte';
  import CircleTwo from '$components/Icons/CircleTwo.svelte';
  import CircleThree from '$components/Icons/CircleThree.svelte';
  import CircleFour from '$components/Icons/CircleFour.svelte';
  import FrequencyDevelopers from "$lib/assets/frequency-developers.png";
  import FrequencyDevelopersMobile from "$lib/assets/frequency-developers-mobile.png";
</script>

<style>
  .developer-squiggles {
      min-height: 209px;
  }
</style>

<SectionWrapper id="developers" classes="freq-container pt-f94">
  <section class="flex md:mb-f40 xs:flex-col md:flex-row">
    <div class="developer-squiggles md:mr-f96">
      <img src={FrequencyDevelopers} alt="abstracted image of developer timeline" class="xs:hidden sm:hidden md:block" />
      <img src={FrequencyDevelopersMobile} alt="abstracted image of developer timeline" class="md:hidden lg:hidden"/>
    </div>
    <SlideIn class="md:basis-1/3">
      <h2 class="title-75 text-teal xs:mx-3 xs:w-full md:w-f400">Developer Advantages:</h2>
      <SectionParagraph classes="title h5 font-bold mt-f24">Getting started building on Frequency is simple and easy.</SectionParagraph>
    </SlideIn>

  </section>

  <section class="flex flex-wrap ml-f128">`

      <div class="developer-step basis-1/3 align-super flex" id="step-1">
        <CircleOne classes=""/>
        <div class="pt-f40 pl-7">
          <h3 class="font-bold">Easy</h3>
          <SectionParagraph classes="text-sm">Set up a templated example application with Frequency Gateway in mere minutes.</SectionParagraph>
        </div>
      </div>
      <div class="developer-step basis-1/3 pt-f32 align-sub h-1/2 flex" id="step-2">
        <CircleTwo class=""/>
        <div>
          <h3 class="font-bold">Open</h3>
          <SectionParagraph classes="text-sm">Build your app with open-source, decentralized tools that free you from relying on big tech.</SectionParagraph>
        </div>
      </div>

      <div class="developer-step basis-1/2 pl-f128 align-super flex" id="step-3">
        <CircleThree />
        <div>
          <h3 class="font-bold">Economical</h3>
          <SectionParagraph classes="text-sm">Add decentralized social to both new and existing applications in a scalable and economical way with batching and Capacity which make blockchain usage predictable and affordable.</SectionParagraph>
        </div>
      </div>
      <div class="developer-step basis-1/2 pl-f74 pt-f48 align-sub flex" id="step-4">
        <CircleFour />
        <div>
          <h3 class="font-bold">Proven</h3>
          <SectionParagraph classes="text-sm">Add decentralized social to both new and existing applications in a scalable and economical way with batching and Capacity which make blockchain usage predictable and affordable.</SectionParagraph>
        </div>
      </div>
  </section>
  <div class="flex justify-center m-f56">
    <Button size="lg" class="">Learn More About Developer Portal </Button>
  </div>
</SectionWrapper>
