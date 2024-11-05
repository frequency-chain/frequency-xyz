<script lang="ts">
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="developers" classes="text-right flex lg:px-0 sm:pb-[140px] lg:pb-0">
  <section
    class="sm:flex-end flex text-navy sm:flex-col sm:items-end sm:gap-6 lg:flex-row-reverse lg:items-start lg:justify-end lg:gap-12"
  >
    <SlideIn>
      <h2 class="title-75 sm:max-w-[500px] sm:pr-5 lg:max-w-[500px] lg:text-left">Developer Advantages:</h2>
    </SlideIn>

    <SectionParagraph classes="paragraph-spacing-right lg:pl-0 sm:pr-5">
      Getting started building on Frequency is simple and easy.
    </SectionParagraph>

    <a href="/docs">
      <button
        class="max-w-[200px] border-2 border-white px-10 py-3 text-xs font-semibold text-white transition-colors duration-500 hover:bg-cream hover:bg-opacity-30"
        >Developer Portal</button
      >
    </a>
  </section>
</SectionWrapper>
