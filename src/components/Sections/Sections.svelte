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

  let scrollContainer: HTMLElement;

  // Trigger allows us to manually trigger the windowInnerWidth update by flipping the boolean
  let trigger: boolean = true;
  // eslint-disable-next-line no-constant-binary-expression
  $: windowInnerWidth = (trigger || true) && Math.min(MAX_PAGE_WIDTH, window.innerWidth);

  $: left = -1 * windowInnerWidth * (section - 1);

  const scrollTopIntoView = () => {
    if (!scrollContainer) return;
    // If the top is not in view, go ahead and scroll to the top of the container
    // and adjust for the header
    const headerHeight = document.getElementById('header')?.getBoundingClientRect()?.height || 0;
    const distanceToTop = scrollContainer.getBoundingClientRect()?.top || 0;
    if (-1 * distanceToTop > headerHeight) {
      scrollContainer.scrollIntoView();
    }
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
    }
    // Upkeep
    lastWheel = wheelTime;
    lastScrollDown = scrolledDown;
  };

  const updateWindowWidth = async () => {
    // Don't animate
    scrollContainer.style.setProperty('transition-property', 'none');
    // Trigger the size adjustment
    trigger = !trigger;
    // Allow the browser to complete the change, then re-enable the animation
    setTimeout(() => scrollContainer.style.removeProperty('transition-property'), 1);
  };

  onMount(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  });
</script>

<!-- For Mobile and Short -->
<div class="vertical:block horizontal:hidden">
  <slot />
</div>
<!-- For Desktop -->
<div
  bind:this={scrollContainer}
  id="scroll-container"
  style:transform={`translate(${left}px)`}
  class={`relative z-0 h-[600px] flex-nowrap transition-transform duration-500 ease-in-out vertical:hidden horizontal:flex`}
  on:wheel={handleWheel}
>
  <slot />
</div>
