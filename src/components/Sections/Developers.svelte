<script lang="ts">
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper
  id="developers"
  classes="text-right flex lg:px-0 sm:pb-[140px] lg:pb-0 justify-end vertical-lg:min-h-[600px]"
>
  <div class="sm:freq-container md:freq-container body relative h-full">
    <section
      class="sm:flex-end flex text-navy sm:flex-col sm:items-end sm:gap-6 lg:flex-row-reverse lg:items-start lg:justify-end lg:gap-12"
    >
      <SlideIn>
        <h2 class="title-75 sm:max-w-[500px] sm:pr-5 lg:max-w-[500px] lg:text-left">Support Your Preferred Apps</h2>
      </SlideIn>

      <SectionParagraph classes="paragraph-spacing-right lg:pl-0 sm:pr-5">
        Frequency is set to unveil a distinctive feature that allows you to express support for the apps and services
        within the Frequency network that you love. This feature will also enable you to publicly alter your choices,
        and, if necessary, reevaluate your support of apps and services, encouraging ethical conduct and responsibility.
      </SectionParagraph>
    </section>
  </div>
</SectionWrapper>
