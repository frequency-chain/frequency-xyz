<script lang="ts">
  import { Button } from '@frequency-chain/style-guide';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import CircleOne from '$components/Icons/CircleOne.svelte';
  import CircleTwo from '$components/Icons/CircleTwo.svelte';
  import CircleThree from '$components/Icons/CircleThree.svelte';
  import CircleFour from '$components/Icons/CircleFour.svelte';
  import OrangeWave from "$lib/assets/orange-waves.svg";
</script>

<style>
  .developer-squiggles {
      height: 209px;
  }
</style>

<SectionWrapper id="developers" classes="freq-container mt-f94">
  <section class="flex ">
    <div class="developer-squiggles mr-f96">
      <img src={OrangeWave as string} />
    </div>
    <SlideIn class="basis-1/3">
      <h2 class="title-75 text-teal w-f400">Developer Advantages:</h2>
      <SectionParagraph classes="title h5 font-bold mt-f24">Getting started building on Frequency is simple and easy.</SectionParagraph>
    </SlideIn>

  </section>

  <section class="flex flex-wrap ml-f128">

      <div class="developer-step basis-1/3 align-super flex" id="step-1">
        <CircleOne classes=""/>
        <div>
          <h3 class="font-bold">Easy</h3>
          <SectionParagraph classes="text-md">Set up a templated example application with Frequency Gateway in mere minutes.</SectionParagraph>
        </div>
      </div>
      <div class="developer-step basis-1/3 pt-f32 align-sub h-1/2 flex" id="step-2">
        <CircleTwo class=""/>
        <div>
          <h3 class="font-bold">Open</h3>
          <SectionParagraph classes="text-md">Build your app with open-source, decentralized tools that free you from relying on big tech.</SectionParagraph>
        </div>
      </div>

      <div class="developer-step basis-1/2 pl-f128 align-super flex" id="step-3">
        <CircleThree />
        <div>
          <h3 class="font-bold">Economical</h3>
          <SectionParagraph classes="text-md">Add decentralized social to both new and existing applications in a scalable and economical way with batching and Capacity which make blockchain usage predictable and affordable.</SectionParagraph>
        </div>
      </div>
      <div class="developer-step basis-1/2 pl-f74 pt-f48 align-sub flex" id="step-4">
        <CircleFour />
        <div>
          <h3 class="font-bold">Proven</h3>
          <SectionParagraph classes="text-md">Add decentralized social to both new and existing applications in a scalable and economical way with batching and Capacity which make blockchain usage predictable and affordable.</SectionParagraph>
        </div>
      </div>
  </section>
  <div class="flex justify-center m-f56">
    <Button size="lg" class="">Learn More About Developer Portal </Button>
  </div>
</SectionWrapper>
