<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import HomeAnimation from '../Animations/Home.svelte';
  import { onMount, tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import { getMsaCount } from '$lib/metrics';

  // top-[calc(255px-((100vw-1300px)*0.075))] !?!?!?!
  // That's to be able to responsively handle the movement of the animation

  // TODO how do we want to handle the initial value?
  let msaCount = 1_333_820;
  const msaCountAnimationMs = 300;
  let updateIntervalMs = 5000;
  let showMsaCount = true;
  $: displayMsaCount = msaCount.toLocaleString();
  // Make this as long as possible for the variable
  $: widthMsaCount = displayMsaCount.replaceAll(/[0-9]/g, '8');

  async function updateMsaCount() {
    const newMsaCount = await getMsaCount();
    if (newMsaCount !== msaCount) {
      // Toggle the animation classes so it is reapplied
      showMsaCount = false;
      await tick();
      await new Promise((r) => setTimeout(r, msaCountAnimationMs + 100));
      msaCount = newMsaCount;
      showMsaCount = true;
    }
  }

  onMount(() => {
    // Setup number
    updateMsaCount();
    const intervalId = setInterval(updateMsaCount, updateIntervalMs);
    return () => {
      clearInterval(intervalId);
    };
  });
</script>

<SectionWrapper class="freq-container flex flex-col pb-f64 md:flex-row md:items-center md:justify-center md:pb-f96">
  <div class="relative flex h-[300px] w-full self-stretch sm:h-[380px] md:h-[700px] md:w-1/2">
    <HomeAnimation />
    <div
      class="math absolute left-[20px] top-[25%] sm:left-[24%] md:left-[23%] md:top-[calc(250px-((100vw-1300px)*0.075))] xl:top-[220px]"
    >
      <SlideIn>
        <div
          class="bg-navy px-4 py-3 text-[40px] leading-none text-white sm:text-[50px] md:text-[calc(100vw/23)] xl:text-[75px]"
        >
          {#if showMsaCount}
            <div
              in:fade={{ duration: msaCountAnimationMs }}
              out:fade={{ duration: msaCountAnimationMs }}
              class="absolute left-0 w-full px-4 text-right font-title tracking-wide"
            >
              {displayMsaCount}
            </div>
          {/if}
          <div class="invisible font-title tracking-wide">
            {widthMsaCount}
          </div>
          <div class="text-right text-[12px] font-semibold uppercase md:text-[0.25em]">New User Activations</div>
        </div>
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
