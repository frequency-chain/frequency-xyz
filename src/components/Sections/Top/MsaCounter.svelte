<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import { getMsaCount, getTotUsersCount } from '$lib/metrics';

  let msaCount = $state(2_098_604);
  let totUsersCount = $state(11_298_183);
  const msaCountAnimationMs = 300;
  let updateIntervalMs = 5000;
  let showMsaCount = $state(false);
  let displayMsaCount = $derived((msaCount + totUsersCount).toLocaleString());
  // Make this as long as possible for the variable width font handling
  let widthMsaCount = $derived(displayMsaCount.replaceAll(/[0-9]/g, '8'));

  async function updateMsaCount(skipAnimation = false) {
    const newMsaCount = await getMsaCount();
    const newTotUsersCount = await getTotUsersCount();

    if (newMsaCount !== msaCount || newTotUsersCount !== totUsersCount) {
      // Toggle the animation classes so it is reapplied
      showMsaCount = skipAnimation ? showMsaCount : false;
      await tick();
      await new Promise((r) => setTimeout(r, msaCountAnimationMs + 100));
      msaCount = newMsaCount;
      totUsersCount = newTotUsersCount;
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

    // TODO AT Protocol Content Feed Users + New User Activations
  });
</script>

<div
  class="-mt-[1px] bg-black px-4 py-3 text-[40px] leading-none text-white sm:text-[50px] md:text-[calc(100vw/23)] xl:text-[75px]"
>
  <div class="text-right text-[12px] font-semibold uppercase md:text-[0.25em]">New User Activations</div>
  <div class="font-title invisible font-bold tracking-wide">
    {widthMsaCount}
  </div>
  {#if showMsaCount}
    <div
      in:fade={{ duration: msaCountAnimationMs }}
      out:fade={{ duration: msaCountAnimationMs }}
      class="font-title absolute top-[28px] left-0 w-full px-4 text-right font-bold tracking-wide"
    >
      {displayMsaCount}
    </div>
  {/if}
</div>
