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
    class="mb:h-[500px] mb-f56 xs:h-[380px] md:-ml-f24 relative flex h-[300px] w-full self-stretch md:mb-0 md:w-1/2 lg:h-[700px]"
  >
    <HomeAnimation />
    <div
      class="math xs:left-[18%] absolute top-[25%] left-[20px] md:top-[calc(85px-((100vw-1300px)*0.075))] md:left-[23%] lg:top-[calc(250px-((100vw-1300px)*0.075))] xl:top-[220px]"
    >
      <SlideIn>
        <MsaCounter />
      </SlideIn>
    </div>
  </div>
  <div class="xs:max-w-[400px] mx-auto w-auto md:w-1/2 md:max-w-[400px] md:pl-0 lg:w-full lg:max-w-[500px]">
    <SlideIn
      class="md:-ml-f16 font-title text-primary xs:text-[50px] leading-none tracking-wide sm:text-[60px] md:text-[75px] lg:text-[90px]"
    >
      <div class="pl-f24 xs:text-left">Welcome</div>
      <div class="gap-f16 flex flex-wrap items-center">
        <div class="text-teal xs:text-normal whitespace-nowrap italic sm:text-lg lg:text-[32px]">to the</div>
        <div class="xs:text-left">People's</div>
      </div>
      <div class="pl-f48">Internet</div>
    </SlideIn>
  </div>
</SectionWrapper>
