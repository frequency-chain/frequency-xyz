<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import { getMsaCount } from '$lib/metrics';

  let msaCount = $state(1_333_820);
  const msaCountAnimationMs = 300;
  let updateIntervalMs = 5000;
  let showMsaCount = $state(false);
  let displayMsaCount = $derived(msaCount.toLocaleString());
  // Make this as long as possible for the variable width font handling
  let widthMsaCount = $derived(displayMsaCount.replaceAll(/[0-9]/g, '8'));

  async function updateMsaCount(skipAnimation = false) {
    const newMsaCount = await getMsaCount();
    if (newMsaCount !== msaCount) {
      // Toggle the animation classes so it is reapplied
      showMsaCount = skipAnimation ? showMsaCount : false;
      await tick();
      await new Promise((r) => setTimeout(r, msaCountAnimationMs + 100));
      msaCount = newMsaCount;
      showMsaCount = true;
    }
  }

  onMount(() => {
    // Setup number and skip the animation first time
    // Try to prevent showing the static number if we can get it in under 1000ms
    const showStatic = setTimeout(() => {
      if (!showMsaCount) showMsaCount = true;
    }, 1000);
    updateMsaCount(true);
    const intervalId = setInterval(updateMsaCount, updateIntervalMs);
    return () => {
      clearTimeout(showStatic);
      clearInterval(intervalId);
    };
  });
</script>

<div
  class="bg-black px-4 py-3 text-[40px] leading-none text-white sm:text-[50px] md:text-[calc(100vw/23)] xl:text-[75px]"
>
  {#if showMsaCount}
    <div
      in:fade={{ duration: msaCountAnimationMs }}
      out:fade={{ duration: msaCountAnimationMs }}
      class="font-title font-bold absolute left-0 w-full px-4 text-right tracking-wide"
    >
      {displayMsaCount}
    </div>
  {/if}
  <div class="font-title font-bold invisible tracking-wide">
    {widthMsaCount}
  </div>
  <div class="text-right text-[12px] font-semibold uppercase md:text-[0.25em]">New User Activations</div>
</div>
