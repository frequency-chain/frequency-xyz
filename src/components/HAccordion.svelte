<script lang="ts">
  import { createEventDispatcher, type Snippet } from 'svelte';
  import { Button } from '@frequency-chain/style-guide';
  import Vector from '../lib/assets/Vector.svg';

  const dispatch = createEventDispatcher();

  interface HAccordionProps {
    state: 'open' | 'closed';
    sectionNumber: string;
    sectionLabel: Snippet;
    iconSrc: string;
    url: string;
    children: Snippet;
  }

  let { state = $bindable('closed'), sectionNumber, sectionLabel, iconSrc, children, url }: HAccordionProps = $props();

  function toggle() {
    if (state === 'closed') {
      state = 'open';
      dispatch('toggled', { index: sectionNumber, state });
    }
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  id={`explore_${sectionNumber}`}
  onclick={toggle}
  class={`w-min-[150px] m:pr-3 flex cursor-pointer flex-col border-l-[1.5px] border-grayBorder border-opacity-25 pl-3 transition-all lg:pr-3 ${state === 'open' ? 'w-f320' : 'w-[132px]'}`}
>
  <span class="-mt-[9px] text-clip text-nowrap font-title text-h3 font-normal text-white"
    >.{parseInt(sectionNumber, 10).toString().padStart(2, '0')}</span
  >
  {#if iconSrc}
    <div id={`explore_${sectionNumber}_icon`} class="pt-[6px]">
      <img src={iconSrc as string} alt="" class="h-[65px] w-[65px]" />
    </div>
  {/if}
  <div id={`explore_${sectionNumber}_label`} class="pt-6">
    <span class="text-clip text-wrap font-title text-h6 font-normal text-white">
      {@render sectionLabel()}
    </span>
  </div>

  <div class={`transition-all ${state === 'open' ? 'block' : 'hidden'}`}>
    <div
      id={`explore_${sectionNumber}_content`}
      class={`lg:max-w-auto m:max-w-[280px] sm max-h-f224 overflow-hidden pb-f12 pt-4 text-white sm:max-w-[515px] sm:pr-f8 lg:max-w-[280px] lg:pl-0`}
    >
      {@render children()}
    </div>
    <Button id={`explore_${sectionNumber}_button`} size="xs" type="primary" href={url} target="_blank">
      <span class=" text-xs text-black">Learn</span> <img src={Vector} width="12px" height="12px" alt="" />
    </Button>
  </div>
</div>
