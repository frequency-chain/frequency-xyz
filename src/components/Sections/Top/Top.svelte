<script lang="ts">
  import SectionWrapper from './../SectionWrapper.svelte';
  import SlideIn from '../../SlideIn.svelte';
  import HomeAnimation from '../../Animations/Home.svelte';
  import MsaCounter from './MsaCounter.svelte';

  // top-[calc(255px-((100vw-1300px)*0.075))] !?!?!?!
  // That's to be able to responsively handle the movement of the animation
</script>

<SectionWrapper class="freq-container flex flex-col md:flex-row md:items-center md:justify-center">
  <div
    class="mb:h-[500px] relative mb-f56 flex h-[300px] w-full self-stretch xs:h-[380px] md:-ml-f24 md:mb-0 md:w-1/2 lg:h-[700px]"
  >
    <HomeAnimation />
    <div
      class="math absolute left-[20px] top-[25%] xs:left-[18%] md:left-[23%] md:top-[calc(85px-((100vw-1300px)*0.075))] lg:top-[calc(250px-((100vw-1300px)*0.075))] xl:top-[220px]"
    >
      <SlideIn>
        <MsaCounter />
      </SlideIn>
    </div>
  </div>
  <div class="mx-auto w-auto xs:max-w-[400px] md:w-1/2 md:max-w-[400px] md:pl-0 lg:w-full lg:max-w-[500px]">
    <SlideIn class="md:-ml-f16">
      <div class="top-title pl-f24 xs:text-left">Welcome</div>
      <div class="flex flex-wrap items-center gap-f16">
        <div class="whitespace-nowrap italic text-teal xs:text-normal sm:text-lg lg:text-[32px]">to the</div>
        <div class="top-title xs:text-left">People's</div>
      </div>
      <div class="top-title pl-f48">Internet</div>
    </SlideIn>
  </div>
</SectionWrapper>

<style lang="postcss">
  .top-title {
    @apply font-title leading-[1] tracking-wide text-primary xs:text-[50px] sm:text-[60px] md:text-[75px] lg:text-[90px];
  }
</style>
