<script lang="ts">
  import { createEventDispatcher, type Snippet } from 'svelte';
  import { Button } from '@frequency-chain/style-guide';
  import Vector from '../lib/assets/Vector.svg';

  const dispatch = createEventDispatcher();

  interface HAccordionProps {
    isOpen: boolean;
    sectionNumber: string;
    sectionLabel: Snippet;
    iconSrc: string;
    url: string;
    children: Snippet;
  }

  let { isOpen = $bindable(false), sectionNumber, sectionLabel, iconSrc, children, url }: HAccordionProps = $props();

  let isEven: boolean = parseInt(sectionNumber, 10) % 2 === 0;
  let textAlignClasses = `lg:text-left vertical-md:text-left ${isEven ? 'text-right' : ''}`;
  let borderClasses = `lg:border-l-[1.5px] lg:pl-f12 lg:border-r-0 lg:pr-3 vertical-md:border-l-[1.5px] vertical-md:pl-f12 vertical-md:border-r-0 vertical-md:pr-3 ${isEven ? 'border-r-[1.5px] pr-f12' : 'border-l-[1.5px] pl-f12'}`;
  let contentAlignClasses = `lg:justify-normal vertical-md:justify-normal ${isEven ? 'justify-end' : ''}`;

  function toggle() {
    if (!isOpen) {
      isOpen = true;
      dispatch('toggled', { index: sectionNumber, isOpen });
    }
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  id={`explore_${sectionNumber}`}
  onclick={toggle}
  class="{`lg:w-min-[150px] vertical-md:w-min-[150px] flex cursor-pointer flex-col ${borderClasses} border-grayBorder px-f32 lg:transition-all vertical-md:transition-all ${isOpen ? 'lg:w-f320 vertical-md:w-f320' : 'lg:w-[132px] vertical-md:w-[132px]'}`}}"
>
  <div class={`-mt-[9px] text-clip text-nowrap font-title text-h3 font-normal text-white ${textAlignClasses}`}>
    .{parseInt(sectionNumber, 10).toString().padStart(2, '0')}
  </div>
  {#if iconSrc}
    <div
      id={`explore_${sectionNumber}_icon`}
      class={`flex w-full flex-row pt-[6px] lg:justify-normal vertical-md:justify-normal ${contentAlignClasses} `}
    >
      <img src={iconSrc as string} alt="" class="h-[65px] w-[65px]" />
    </div>
  {/if}
  <div
    id={`explore_${sectionNumber}_label`}
    class={`text-clip text-wrap pt-6 font-title text-h6 font-normal text-white ${textAlignClasses}`}
  >
    {@render sectionLabel()}
  </div>

  <div
    class={`lg:transition-all vertical-md:transition-all ${isOpen ? 'block' : 'block lg:hidden vertical-md:hidden'}`}
  >
    <div
      id={`explore_${sectionNumber}_content`}
      class={`sm max-h-f224 max-w-[515px] overflow-hidden pb-f12 pl-0 pr-f8 pt-4 text-white md:max-w-full lg:max-w-[280px] vertical-md:max-w-[280px] ${textAlignClasses}`}
    >
      {@render children()}
    </div>
    <div class={`flex flex-row ${contentAlignClasses}`}>
      <Button id={`explore_${sectionNumber}_button`} size="xs" type="primary" href={url} target="_blank">
        <span class=" text-xs text-black">Learn</span> <img src={Vector} width="12px" height="12px" alt="" />
      </Button>
    </div>
  </div>
</div>
