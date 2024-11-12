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
<SectionWrapper id="developers" classes="pt-f94">
  <section class="flex flex-col lg:flex-row shrink">
    <div class="developer-squiggles lg:mr-f96">
      <img src={FrequencyDevelopersMobile} alt="abstract developer timeline" class="md:hidden" />
      <img src={FrequencyDevelopersTablet} alt="abstract developer timeline" class="sm:hidden md:block lg:hidden" />
      <img src={FrequencyDevelopers} alt="abstract developer timeline" class="sm:hidden lg:block" />
    </div>
    <div class="px-[36px] pt-f12">
      <SlideIn class="lg:basis-1/3">
        <h2 class="title-50 text-teal mx-0 w-full">{DeveloperStepsText.header.title}</h2>
        <p class="title text-[22px] font-bold mt-f24">{DeveloperStepsText.header.text_html}</p>
      </SlideIn>
    </div>
  </section>
  <div class="mt-[22px]">
    <DeveloperStepsMobile />
    <DeveloperStepsTablet />
    <DeveloperSteps />
  </div>
  <section class="flex justify-center my-f56">
    <Button size="lg" class="h6 p-f16">
      {DeveloperStepsText.button.title}
    </Button>
  </section>
</SectionWrapper>
