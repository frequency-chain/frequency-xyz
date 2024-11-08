<script lang="ts">
  import { Button } from '@frequency-chain/style-guide';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import CircleOne from '$components/Icons/CircleOne.svelte'
  import CircleTwo from '$components/Icons/CircleTwo.svelte'
  import CircleThree from '$components/Icons/CircleThree.svelte'
  import CircleFour from '$components/Icons/CircleFour.svelte'
</script>

<SectionWrapper id="developers" classes="freq-container">
  <section class="">
    <div class="w-f400">
      <SlideIn>
        <h2 class="title-75 text-teal w-f400">Developer Advantages:</h2>
        <SectionParagraph classes="title h5 font-bold">Getting started building on Frequency is simple and easy.</SectionParagraph>
      </SlideIn>
    </div>
    <div>
      <CircleOne />
      <h3>Easy</h3>
      <SectionParagraph classes="">Set up a templated example application with Frequency Gateway in mere minutes.</SectionParagraph>
    </div>
    <div>
      <CircleTwo />
      <h3>Open</h3>
      <SectionParagraph classes="">Build your app with open-source, decentralized tools that free you from relying on big tech.</SectionParagraph>
    </div>
    <div>
      <CircleThree />
      <h3>Economical</h3>
      <SectionParagraph classes="">Add decentralized social to both new and existing applications in a scalable and economical way with batching and Capacity which make blockchain usage predictable and affordable.</SectionParagraph>
    </div>
    <div>
      <CircleFour />
      <h3>Proven</h3>
      <SectionParagraph classes="">Add decentralized social to both new and existing applications in a scalable and economical way with batching and Capacity which make blockchain usage predictable and affordable.</SectionParagraph>
    </div>
  </section>
</SectionWrapper>
<div class="mx-auto mt-f56">
  <Button size="lg">Learn More About Developer Portal </Button>
</div>
