<script lang="ts">
  import { onMount } from 'svelte';
  import { MAX_PAGE_WIDTH } from '$lib/consts';

  // Tick again after this long is always a new scroll
  // Based on macOS fast swipe
  const CHANGE_DELAY_MS = 2000;
  // Tick again after no ticks for this long is always a new scroll
  const WHEEL_DELAY_MS = 150;

  // 1 indexed sections
  export let section: number;
  export let sectionCount: number;

  let scrollContainer: Element;

  $: {
    triggerScroll(section, 'smooth');
  }

  const scrollTopIntoView = () => {
    if (!scrollContainer) return;
    // If the top is not in view, go ahead and scroll to the top of the container
    // and adjust for the header
    const headerHeight = document.getElementById('header')?.getBoundingClientRect()?.height || 0;
    const distanceToTop = scrollContainer.getBoundingClientRect()?.top || 0;
    if (distanceToTop < headerHeight) {
      window.scrollTo({ top: headerHeight });
    }
  };

  const triggerScroll = (toSection: number, behavior: 'instant' | 'smooth') => {
    const scrollWidth = window.innerWidth > MAX_PAGE_WIDTH ? MAX_PAGE_WIDTH : window.innerWidth;
    scrollContainer?.scrollTo({
      left: scrollWidth * (toSection - 1),
      behavior,
    });
  };

  // Time the prior wheel event took place
  // Used to track if the wheel is being moved again
  let lastWheel: number = 0;
  let lastChange: number = 0;
  let lastScrollDown: boolean = false;

  const handleWheel = (event: WheelEvent) => {
    const scrolledDown = event.deltaY > 0;

    // Throttle scrolling
    const wheelTime = Date.now();
    const sinceLastChange = wheelTime - lastChange;
    const sinceLastWheel = wheelTime - lastWheel;

    const isChangeSection =
      // Direction change!
      scrolledDown !== lastScrollDown ||
      // Completely new scroll
      sinceLastWheel > WHEEL_DELAY_MS ||
      // Non stop scrolling
      sinceLastChange > CHANGE_DELAY_MS;

    const isLastSection = section >= sectionCount;
    const isFirstSection = section <= 1;

    // Wait until we would change, then continue scrolling up/down the page
    if ((isLastSection && scrolledDown && isChangeSection) || (isFirstSection && !scrolledDown && isChangeSection)) {
      return;
    }

    // Changing...
    event.preventDefault();

    if (isChangeSection) {
      // Increase
      if (event.deltaY > 0) {
        section = Math.min(section + 1, sectionCount);
      }
      // Decrease
      if (event.deltaY < 0) {
        section = Math.max(section - 1, 1);
        scrollTopIntoView();
      }
      lastChange = wheelTime;
      triggerScroll(section, 'smooth');
    }
    // Upkeep
    lastWheel = wheelTime;
    lastScrollDown = scrolledDown;
  };

  const setSectionScroll = () => {
    triggerScroll(section, 'instant');
  };

  onMount(() => {
    // Update to the correct position if the browser reloads it, but that can take time, so the setTimeout is needed
    setTimeout((): void => {
      if (scrollContainer.scrollLeft > 0) {
        triggerScroll(section, 'instant');
      }
    }, 10);
    window.addEventListener('resize', setSectionScroll);
    return () => {
      window.removeEventListener('resize', setSectionScroll);
    };
  });
</script>

<!-- For Mobile and Short -->
<div class="sm:block md:block lg:hidden short:block">
  <slot />
</div>
<!-- For Desktop -->
<div
  bind:this={scrollContainer}
  id="scroll-container"
  class="z-0 flex-nowrap overflow-hidden sm:hidden md:hidden lg:flex short:hidden"
  on:wheel={handleWheel}
>
  <slot />
</div>
