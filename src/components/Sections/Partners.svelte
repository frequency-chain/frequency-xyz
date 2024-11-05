<script lang="ts">
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
      <h2 class="title-75 text-yellow sm:pr-5 lg:max-w-[600px]">Our Partners</h2>
    </SlideIn>
    <SectionParagraph classes="sm:pr-5 md:pr-[140px] lg:px-0 text-white">A, B, C</SectionParagraph>
  </section>
</SectionWrapper>
