<script lang="ts">
  import SectionWrapper from './../SectionWrapper.svelte';
  import SlideIn from '../../SlideIn.svelte';
  import HomeAnimation from '../../Animations/Home.svelte';
  import MsaCounter from './MsaCounter.svelte';

  // top-[calc(255px-((100vw-1300px)*0.075))] !?!?!?!
  // That's to be able to responsively handle the movement of the animation
</script>

<SectionWrapper class="freq-container flex flex-col pb-f64 md:flex-row md:items-center md:justify-center md:pb-f96">
  <div class="relative flex h-[300px] w-full self-stretch sm:h-[380px] md:h-[700px] md:w-1/2">
    <HomeAnimation />
    <div
      class="math absolute left-[20px] top-[25%] sm:left-[24%] md:left-[23%] md:top-[calc(250px-((100vw-1300px)*0.075))] xl:top-[220px]"
    >
      <SlideIn>
        <MsaCounter />
      </SlideIn>
    </div>
  </div>
  <div class="w-full sm:max-w-[260px] sm:pl-f32 md:w-1/2 md:max-w-[300px] md:pl-0 lg:max-w-[380px]">
    <SlideIn>
      <div class="title-70 w-full text-primary sm:text-left">Bringing</div>
      <div class="title-70 relative w-full text-primary sm:text-right">Humanity</div>
      <div class="w-full italic text-teal sm:text-[28px] lg:text-[32px]">to the</div>
      <div class="title-70 w-full text-primary sm:text-left">People's</div>
      <div class="title-70 w-full text-primary sm:text-right">Internet</div>
    </SlideIn>
  </div>
</SectionWrapper>
