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
<SectionWrapper id="developers" class="pb-f32 md:pb-f64 pt-[30px] md:pt-[38px] lg:pt-[34px]">
  <section class="mx-auto flex max-w-(--breakpoint-xl) flex-col lg:flex-row">
    <DeveloperAnimation class="mx-auto max-h-[260px] md:max-h-[300px] md:max-w-[800px] lg:max-h-none" />
    <div class="freq-container-padding lg:mt-[36px]">
      <SlideIn class="lg:basis-1/3]">
        <h2 class="title-70 text-primary mx-0 w-full md:mt-[24px] md:max-w-[400px]">
          {DeveloperStepsText.header.title}
        </h2>
        <p class="title-h5 mt-f24">{DeveloperStepsText.header.text_html}</p>
      </SlideIn>
    </div>
  </section>

  <div class="freq-container mb-f24 md:mb-f64 mt-[22px]">
    <DeveloperStepsMobile />
    <DeveloperStepsTablet />
    <DeveloperSteps />
  </div>

  <section class="freq-container-padding">
    <Button href="{base}/dev-portal" size="full" class="my-f32 mx-auto block max-w-[388px] lg:hidden">
      {DeveloperStepsText.button.title}
    </Button>
    <Button href="{base}/dev-portal" size="lg" class="my-f32 mx-auto hidden max-w-[388px] lg:block">
      {DeveloperStepsText.button.text_html}
    </Button>
  </section>
</SectionWrapper>
