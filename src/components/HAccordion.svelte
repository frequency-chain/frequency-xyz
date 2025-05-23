<script lang="ts">
  import { createEventDispatcher, type Snippet } from 'svelte';
  import { Button, Assets } from '@frequency-chain/style-guide';
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
  class={`flex flex-col ${borderClasses} border-grayBorder px-f32 lg:pb-f96 lg:pt-f96 lg:transition-all ${isOpen ? 'lg:w-[316px] xl:w-[400px]' : 'shrink-0 lg:w-[140px] lg:cursor-pointer'}`}
>
  <div class={`font-title font-bold -mt-[9px] text-[40px] text-nowrap text-clip text-white sm:text-[44px] ${textAlignClasses}`}>
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
  <div id={`explore_${sectionNumber}_label`} class={`title-h6 pt-6 text-wrap text-clip text-white ${textAlignClasses}`}>
    {@render sectionLabel()}
  </div>

  <div class={`lg:transition-all ${isOpen ? 'block' : 'block lg:hidden'}`}>
    <div
      id={`explore_${sectionNumber}_content`}
      class={`body pb-f12 pr-f8 overflow-hidden pt-4 pl-0 text-white md:max-w-full ${textAlignClasses}`}
    >
      {@render children()}
    </div>
    <div class={`flex flex-row ${contentAlignClasses}`}>
      <Button intent="filled-light" id={`explore_${sectionNumber}_button`} size="sm" href={url}>
        Learn
        <Assets.Arrow class="rotate-180 h-f16 w-auto" />
      </Button>
    </div>
  </div>
</div>
