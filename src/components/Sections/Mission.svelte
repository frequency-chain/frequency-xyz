<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
</script>

<SectionWrapper id="mission" classes="lg:px-0">
  <section class="flex w-full flex-col gap-6 lg:w-[60%] lg:pl-6">
    <SlideIn>
      <h2 class="title-75 paragraph-spacing-left text-teal sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
        Frequency’s Mission
      </h2>
    </SlideIn>
    <SlideIn>
      <p class="subtitle paragraph-spacing-left sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
        Frequency’s Mission is to provide critical infrastructure to help people take back control over their digital
        lives by:
      </p>
    </SlideIn>
  </section>
</SectionWrapper>
