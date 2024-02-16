<script lang="ts">
  import { MAX_PAGE_WIDTH } from '$lib/consts';

  import SectionNavigation from '../components/Sections/SectionNavigation.svelte';
  import Sections from '../components/Sections/Sections.svelte';
  import Section1 from '../components/Sections/Section1.svelte';
  import Section2 from '../components/Sections/Section2.svelte';
  import Section3 from '../components/Sections/Section3.svelte';
  import Section4 from '../components/Sections/Section4.svelte';
  import Section5 from '../components/Sections/Section5.svelte';

  let SECTION_COUNT = 5;

  let section = 1;
  let prevSection = 1;
  let scrollPosition = 0;

  $: {
    // TODO: Fix bug when resizing the window.
    const scrollContainer = document.getElementById('scroll-container');
    const spaceBetween = section - prevSection;
    const scrollWidth = window.innerWidth > MAX_PAGE_WIDTH ? MAX_PAGE_WIDTH : window.innerWidth;
    scrollContainer?.scrollBy({
      left: scrollWidth * spaceBetween,
      behavior: 'smooth',
    });
    prevSection = section;
  }

  let timeoutId: number | null = null;
  const throttle = (v: () => void) => {
    if (timeoutId === null) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, 100) as unknown as number;
      v();
      return;
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, 100) as unknown as number;
  };

  $: {
    throttle(() => {
      if (scrollPosition > 0 && section < SECTION_COUNT) {
        section++;
      } else if (scrollPosition < 0 && section > 1) {
        section--;
      }
      scrollPosition = 0;
    });
  }
</script>

<div class="relative lg:max-w-[100vw] xl:max-w-page">
  <Sections bind:scrollPosition isLastSection={section === SECTION_COUNT}>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </Sections>
  <SectionNavigation bind:section />
</div>
