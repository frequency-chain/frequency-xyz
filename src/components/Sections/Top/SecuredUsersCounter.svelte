<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import { getMsaCount, getTotUsersCount } from '$lib/metrics';

  let msaCount = $state(2_098_604);
  let totUsersCount = $state(11_298_183);

  const animationMs = 300;
  let updateIntervalMs = 5000;

  let showSecuredUsersCount = $state(false);

  let displaySecuredUsersCount = $derived((msaCount + totUsersCount).toLocaleString());
  // Make this as long as possible for the variable width font handling
  let widthSecuredUsersCount = $derived(displaySecuredUsersCount.replaceAll(/[0-9]/g, '8'));

  async function updateSecuredUsersCount(skipAnimation = false) {
    const newMsaCount = await getMsaCount();
    const newTotUsersCount = await getTotUsersCount();

    if (newMsaCount !== msaCount || newTotUsersCount !== totUsersCount) {
      // Toggle the animation classes so it is reapplied
      showSecuredUsersCount = skipAnimation ? showSecuredUsersCount : false;
      await tick();
      await new Promise((r) => setTimeout(r, animationMs + 100));
      msaCount = newMsaCount;
      totUsersCount = newTotUsersCount;
      showSecuredUsersCount = true;
    }
  }

  onMount(() => {
    // Setup number and skip the animation first time
    // Try to prevent showing the static number if we can get it in under 1000ms
    const showStatic = setTimeout(() => {
      if (!showSecuredUsersCount) showSecuredUsersCount = true;
    }, 1000);
    updateSecuredUsersCount(true);
    const intervalId = setInterval(updateSecuredUsersCount, updateIntervalMs);
    return () => {
      clearTimeout(showStatic);
      clearInterval(intervalId);
    };
  });
</script>

<div
  class="-mt-[1px] bg-black px-4 py-3 text-[40px] leading-none text-white sm:text-[50px] md:text-[calc(100vw/23)] xl:text-[75px]"
>
  <div class="text-right text-[12px] font-semibold uppercase md:text-[0.25em]">User Data Secured For</div>
  <div class="font-title invisible font-bold tracking-wide">
    {widthSecuredUsersCount}
  </div>
  {#if showSecuredUsersCount}
    <div
      in:fade={{ duration: animationMs }}
      out:fade={{ duration: animationMs }}
      class="font-title absolute top-[28px] left-0 w-full px-4 text-right font-bold tracking-wide"
    >
      {displaySecuredUsersCount}
    </div>
  {/if}
</div>
