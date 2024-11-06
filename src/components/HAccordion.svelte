<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '@frequency-chain/style-guide';
  import Vector from '../lib/assets/Vector.svg';

  const dispatch = createEventDispatcher();

  let {
    state = $bindable('closed'),
    sectionNumber,
    sectionLabel,
    iconSrc,
  }: { state: 'open' | 'closed'; sectionNumber: number | string; sectionLabel: string; iconSrc: string } = $props();
  //   export let state: 'open' | 'closed' = $state('open');
  //   export let sectionNumber: string;
  //   export let sectionLabel: string = 'Section<br/>label';
  //   export let iconSrc: string | null = null;

  function toggle() {
    if (state === 'open') {
      state = 'closed';
    } else {
      state = 'open';
    }

    dispatch('toggled', { index: sectionNumber, state });
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  id={`explore_${sectionNumber}`}
  onclick={toggle}
  class="justify-left m:w-min-[112px] m:pr-3 flex flex-col border-l-[1.5px] border-grayBorder border-opacity-25 pl-3 sm:items-end lg:min-w-[112px] lg:items-start lg:pr-3"
>
  <div class="flex text-left sm:items-end lg:items-start">
    <span class="-mt-[9px] text-clip text-nowrap font-title text-h3 font-normal text-white"
      >.{sectionNumber.toString().padStart(2, '0')}</span
    >
  </div>
  {#if iconSrc}
    <div id={`explore_${sectionNumber}_icon`} class="pt-[6px]">
      <img src={iconSrc} alt="" class="h-[65px] w-[65px]" />
    </div>
  {/if}
  <div id={`explore_${sectionNumber}_label`} class="pt-6">
    <span class="text-clip text-nowrap font-title text-h6 font-normal text-white">
      {@html sectionLabel}
    </span>
  </div>

  {#if state === 'open'}
    <div
      id={`explore_${sectionNumber}_content`}
      class=" paragraph-spacing-right lg:max-w-auto m:max-w-[280px] m:pb-0 overflow-hidden pt-4 text-left font-sans text-sm text-white sm:max-w-[515px] sm:pb-[100px] sm:pr-5 lg:max-w-[280px] lg:pb-0 lg:pl-0"
    >
      <slot>Insert section content here</slot>
    </div>
    <div id={`explore_${sectionNumber}_button`} class="m:pt-4 lg:pt-4">
      <Button size="xs" type="primary"
        ><span class=" text-xs text-black">Learn</span> <img src={Vector} width="12px" height="12px" alt="" /></Button
      >
    </div>
  {/if}
</div>
