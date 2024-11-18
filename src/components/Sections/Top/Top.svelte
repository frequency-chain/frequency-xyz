<script lang="ts">
  import SectionWrapper from './../SectionWrapper.svelte';
  import SlideIn from '../../SlideIn.svelte';
  import HomeAnimation from '../../Animations/Home.svelte';
  import MsaCounter from './MsaCounter.svelte';

  // top-[calc(255px-((100vw-1300px)*0.075))] !?!?!?!
  // That's to be able to responsively handle the movement of the animation
</script>

<SectionWrapper class="freq-container flex flex-col pb-f64 md:flex-row md:items-center md:justify-center">
  <div
    class="mb:h-[500px] relative mb-f56 flex h-[300px] w-full self-stretch sm:h-[380px] md:mb-0 md:w-1/2 lg:h-[700px]"
  >
    <HomeAnimation />
    <div
      class="math absolute left-[20px] top-[25%] sm:left-[18%] md:left-[23%] md:top-[calc(85px-((100vw-1300px)*0.075))] lg:top-[calc(250px-((100vw-1300px)*0.075))] xl:top-[220px]"
    >
      <SlideIn>
        <MsaCounter />
      </SlideIn>
    </div>
  </div>
  <div class="mx-auto w-full sm:max-w-[360px] md:w-1/2 md:max-w-[300px] md:pl-0 lg:max-w-[380px]">
    <SlideIn>
      <div
        class="font-title text-[44px] leading-[1] tracking-wide text-primary sm:text-left sm:text-[55px] md:text-[55px] lg:text-[70px]"
      >
        Bringing
      </div>
      <div
        class="relative font-title text-[44px] leading-[1] tracking-wide text-primary sm:text-right sm:text-[55px] md:text-[55px] lg:text-[70px]"
      >
        Humanity
      </div>
      <div class="italic text-teal sm:text-[28px] lg:text-[32px]">to the</div>
      <div
        class="font-title text-[44px] leading-[1] tracking-wide text-primary sm:text-left sm:text-[55px] md:text-[55px] lg:text-[70px]"
      >
        People's
      </div>
      <div
        class="font-title text-[44px] leading-[1] tracking-wide text-primary sm:text-right sm:text-[55px] md:text-[55px] lg:text-[70px]"
      >
        Internet
      </div>
    </SlideIn>
  </div>
</SectionWrapper>
