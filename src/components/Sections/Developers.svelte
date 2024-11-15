<script lang="ts">
  import { Button } from '@frequency-chain/style-guide';
  import { base } from '$app/paths';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import FrequencyDevelopers from '$lib/assets/frequency-developers.png';
  import FrequencyDevelopersMobile from '$lib/assets/frequency-developers-mobile.png';
  import FrequencyDevelopersTablet from '$lib/assets/frequency-developers-tablet.png';
  import DeveloperStepsMobile from '$components/Sections/DeveloperStepsMobile.svelte';
  import DeveloperStepsTablet from '$components/Sections/DeveloperStepsTablet.svelte';
  import DeveloperSteps from '$components/Sections/DeveloperSteps.svelte';
  import { DeveloperStepsText } from '$lib/consts';
</script>

<!-- Graphic and Header -->
<SectionWrapper id="developers" class="freq-container overflow-hidden pt-[30px] md:pt-[38px] lg:pt-[34px]">
  <section class="flex shrink flex-col lg:flex-row">
    <div class="developer-squiggles">
      <img src={FrequencyDevelopersMobile} alt="abstract developer timeline" class="block md:hidden" />
      <img src={FrequencyDevelopersTablet} alt="abstract developer timeline" class="hidden md:block lg:hidden" />
      <img src={FrequencyDevelopers} alt="abstract developer timeline" class="ml-f16 hidden max-w-[700px] lg:block" />
    </div>
    <div class="px-[36px] md:px-[64px] lg:px-[128px]">
      <SlideIn class="lg:basis-1/3]">
        <h2 class="mx-0 w-full text-[52px] font-bold text-teal md:mt-[24px]">{DeveloperStepsText.header.title}</h2>
        <p class="mt-f24 text-[22px] font-bold">{DeveloperStepsText.header.text_html}</p>
      </SlideIn>
    </div>
  </section>
  <div class="mt-[22px]">
    <DeveloperStepsMobile />
    <DeveloperStepsTablet />
    <DeveloperSteps />
  </div>
  <section class="my-f56 flex justify-center px-[36px]">
    <Button href="{base}/docs" size="lg" class="h6 p-f16 lg:hidden">
      {DeveloperStepsText.button.title}
    </Button>
    <Button href="{base}/docs" size="lg" class="mt-[56px] hidden lg:block">
      {DeveloperStepsText.button.text_html}
    </Button>
  </section>
</SectionWrapper>
