<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SectionContent from '../SectionContent.svelte';
</script>

<SectionWrapper id="about" classes="text-cream bg-navy sm:pb-[40px] lg:pb-0">
  <SectionContent classes="flex gap-12 sm:flex-col sm:items-end lg:flex-row lg:items-start justify-center">
    <div class="flex gap-4 text-right sm:items-end lg:items-start">
      <SlideIn>
        <h2 class="title-100 -mt-[9px] sm:max-w-[280px] sm:pr-5 lg:max-w-[320px]">What is Frequency?</h2>
      </SlideIn>
    </div>

    <SectionParagraph
      classes="text-left paragraph-spacing-right lg:pl-0 sm:pb-[100px] lg:pb-0 sm:pr-5  sm:max-w-[515px] lg:max-w-auto"
    >
      Frequency is a blockchain designed to support decentralized social networks to give people control over their
      online presence. With Frequency, users can freely choose and connect on social apps while retaining ownership of
      their data. Built on the Decentralized Social Networking Protocol (DSNP), Frequency offers scalable tools for
      message discovery, flexible storage for social and identity data, and a unique cost-sharing model that allows apps
      to deliver smooth, secure experiences that put users in charge."
    </SectionParagraph>
  </SectionContent>
</SectionWrapper>
