<script>
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
</script>

<SectionWrapper
  id="section1"
  classes="sm:freq-container md:freq-container flex sm:justify-center md:justify-center lg:px-0"
>
  <div class="flex-1 sm:hidden md:hidden lg:block">img</div>

  <div
    class="relative max-w-[800px] border-navy sm:border-0 sm:pr-[65px] md:border-0 md:pr-[140px] lg:w-[60vw] lg:border-b-8 lg:pr-[140px]"
  >
    <section class="mb-[80px] flex flex-col gap-6">
      <SlideIn>
        <h2 class="title-75 text-teal">Build at a higher Frequency</h2>
      </SlideIn>
      <SlideIn>
        <p class="subtitle">Frequency Empowers the Social Web, Putting Control and Data Privacy in Your Hands</p>
      </SlideIn>
      <p class="text-base">
        Frequency contributes to the mission of creating a better web and world. It empowers individuals to ensure the
        portability of their content and safeguard their privacy. The protocol enables ownership of digital identity and
        control over online presence. In a world where technology can have both positive and negative effects,
        Frequency's focus is on what truly matters: people.
      </p>
    </section>
    <div
      class="absolute font-bold leading-none text-navy sm:-right-6 sm:bottom-[80px] sm:-rotate-90 sm:text-75 md:text-100 lg:-bottom-[16px] lg:right-4 lg:rotate-0 lg:text-100"
    >
      .01
    </div>
  </div>
</SectionWrapper>
