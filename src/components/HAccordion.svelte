<script lang="ts">
  import { createEventDispatcher, type Snippet } from 'svelte';
  import { Button } from '@frequency-chain/style-guide';
  import Arrow from '../lib/assets/arrow-right.svg';
  import { MAX_MOBILE_WIDTH } from '$lib/consts';

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
  let textAlignClasses = `md:text-left ${isEven ? 'text-right' : ''}`;
  let borderClasses = `md:border-l-[1.5px] lg:pl-f12 md:border-r-0 lg:pr-3 ${isEven ? 'border-r-[1.5px] sm:pr-f12' : 'border-l-[1.5px] sm:pl-f12'}`;
  let contentAlignClasses = `md:justify-normal ${isEven ? 'justify-end' : ''}`;

  function toggle() {
    // Don't toggle unless we are open and in lg view
    if (!isOpen && (document.body?.scrollWidth || MAX_MOBILE_WIDTH) >= MAX_MOBILE_WIDTH) {
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
  class={`flex flex-col ${borderClasses} border-grayBorder px-f32 lg:pb-f96 lg:pt-f96 lg:transition-all ${isOpen ? 'lg:w-[316px]' : 'shrink-0 lg:w-[140px] lg:cursor-pointer'}`}
>
  <div class={`-mt-[9px] text-clip text-nowrap font-title text-[40px] text-white sm:text-[44px] ${textAlignClasses}`}>
    .{parseInt(sectionNumber, 10).toString().padStart(2, '0')}
  </div>
  {#if iconSrc}
    <div
      id={`explore_${sectionNumber}_icon`}
      class={`flex w-full flex-row pt-[6px] lg:justify-normal ${contentAlignClasses} `}
    >
      <img src={iconSrc as string} alt="" class="h-[62px] w-[62px] md:h-[65px] md:w-[65px] lg:h-[74px] lg:w-[74px]" />
    </div>
  {/if}
  <div id={`explore_${sectionNumber}_label`} class={`title-h6 text-clip text-wrap pt-6 text-white ${textAlignClasses}`}>
    {@render sectionLabel()}
  </div>

  <div class={`lg:transition-all ${isOpen ? 'block' : 'block lg:hidden'}`}>
    <div
      id={`explore_${sectionNumber}_content`}
      class={`sm overflow-hidden pb-f12 pl-0 pr-f8 pt-4 text-white md:max-w-full ${textAlignClasses}`}
    >
      {@render children()}
    </div>
    <div class={`flex flex-row ${contentAlignClasses}`}>
      <Button id={`explore_${sectionNumber}_button`} size="xs" type="primary" href={url} target="_blank">
        <span class=" text-xs text-black">Learn</span> <img src={Arrow} width="12px" height="12px" alt="" />
      </Button>
    </div>
  </div>
</div>
