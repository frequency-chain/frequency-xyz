<script lang="ts">
  import { Button } from '@frequency-chain/style-guide';
  import { base } from '$app/paths';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import DeveloperStepsMobile from '$components/Sections/DeveloperStepsMobile.svelte';
  import DeveloperStepsTablet from '$components/Sections/DeveloperStepsTablet.svelte';
  import DeveloperSteps from '$components/Sections/DeveloperSteps.svelte';
  import { DeveloperStepsText } from '$lib/consts';
  import DeveloperAnimation from '../Animations/Developer.svelte';
</script>

<!-- Graphic and Header -->
<SectionWrapper id="developers" class="pt-[30px] md:pt-[38px] lg:pt-[34px]">
  <section class="mx-auto flex max-w-screen-xl flex-col lg:flex-row">
    <DeveloperAnimation class="max-h-[240px] md:max-h-[380px] lg:max-h-none" />
    <div class="freq-container lg:mt-[36px]">
      <SlideIn class="lg:basis-1/3]">
        <h2 class="title-70 mx-0 w-full font-bold text-teal md:mt-[24px] md:max-w-[400px]">
          {DeveloperStepsText.header.title}
        </h2>
        <p class="mt-f24 text-[18px] font-bold md:text-[22px]">{DeveloperStepsText.header.text_html}</p>
      </SlideIn>
    </div>
  </section>
  <div class="freq-container mt-[22px]">
    <DeveloperStepsMobile />
    <DeveloperStepsTablet />
    <DeveloperSteps />
  </div>
  <section class="freq-container-padding my-f56 flex justify-center">
    <Button href="{base}/docs" size="lg" class="h6 max-w-[90vw] p-f16 lg:hidden">
      {DeveloperStepsText.button.title}
    </Button>
    <Button href="{base}/docs" size="lg" class="mt-[56px] hidden lg:block">
      {DeveloperStepsText.button.text_html}
    </Button>
  </section>
</SectionWrapper>
