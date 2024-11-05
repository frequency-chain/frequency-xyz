<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionContent from '../SectionContent.svelte';
</script>

<SectionWrapper id="about" classes="text-cream bg-navy sm:pb-[40px] lg:pb-0">
  <SectionContent classes="flex gap-12 sm:flex-col sm:items-end lg:flex-row lg:items-start justify-center">
    <div class="flex gap-4 text-right sm:items-end lg:items-start">
      <SlideIn>
        <h2 class="title-100 -mt-[9px] sm:max-w-[280px] sm:pr-5 lg:max-w-[320px]">
          Bringing Humanity Internet of People
        </h2>
      </SlideIn>
    </div>
  </SectionContent>
</SectionWrapper>
