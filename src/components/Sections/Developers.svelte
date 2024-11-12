<script lang="ts">
  import { Button } from '@frequency-chain/style-guide';
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
<SectionWrapper id="developers" classes="sm:pt-[30px] md:pt-[38px] lg:pt-[34px]">
  <section class="flex flex-col lg:flex-row shrink">
    <div class="developer-squiggles  md:mr-[32px] lg:mr-f96">
      <img src={FrequencyDevelopersMobile} alt="abstract developer timeline" class="md:hidden" />
      <img src={FrequencyDevelopersTablet} alt="abstract developer timeline" class="sm:hidden md:block lg:hidden" />
      <img src={FrequencyDevelopers} alt="abstract developer timeline" class="sm:hidden lg:block max-w-[722px] ml-f16" />
    </div>
    <div class="px-[36px] md:px-[64px] lg:px-[128px]">
      <SlideIn class="lg:basis-1/3]">
        <h2 class="text-[52px] font-bold text-teal mx-0 w-full md:mt-[24px]">{DeveloperStepsText.header.title}</h2>
        <p class="text-[22px] font-bold mt-f24">{DeveloperStepsText.header.text_html}</p>
      </SlideIn>
    </div>
  </section>
  <div class="mt-[22px]">
    <DeveloperStepsMobile />
    <DeveloperStepsTablet />
    <DeveloperSteps />
  </div>
  <section class="flex justify-center my-f56">
    <Button size="lg" class="h6 p-f16 lg:hidden">
      {DeveloperStepsText.button.title}
    </Button>
    <Button size="lg" class="sm:hidden md:hidden lg:block mt-[56px]">
      {DeveloperStepsText.button.text_html}
    </Button>
  </section>
</SectionWrapper>
