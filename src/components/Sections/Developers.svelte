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
<SectionWrapper id="developers" class="pb-f32 pt-[30px] md:pb-f56 md:pt-[38px] lg:pt-[34px]">
  <section class="mx-auto flex max-w-screen-xl flex-col lg:flex-row">
    <DeveloperAnimation class="mx-auto max-h-[260px] md:max-h-[300px] md:max-w-[800px] lg:max-h-none" />
    <div class="freq-container-padding lg:mt-[36px]">
      <SlideIn class="lg:basis-1/3]">
        <h2 class="title-70 mx-0 w-full text-teal md:mt-[24px] md:max-w-[400px]">
          {DeveloperStepsText.header.title}
        </h2>
        <p class="title-h5 mt-f24">{DeveloperStepsText.header.text_html}</p>
      </SlideIn>
    </div>
  </section>
  <div class="freq-container mb-f24 mt-[22px] md:mb-f56">
    <DeveloperStepsMobile />
    <DeveloperStepsTablet />
    <DeveloperSteps />
  </div>
  <section class="freq-container-padding flex justify-center">
    <Button href="{base}/dev-portal" size="lg" class="h6 max-w-[90vw] p-f16 lg:hidden">
      {DeveloperStepsText.button.title}
    </Button>
    <Button href="{base}/dev-portal" size="lg" class="hidden lg:block">
      {DeveloperStepsText.button.text_html}
    </Button>
  </section>
</SectionWrapper>
