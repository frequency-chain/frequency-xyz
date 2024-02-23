<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section1Wave from './Section1Wave.svelte';
</script>

<SectionWrapper
  id="section1"
  classes="flex sm:flex-col-reverse lg:flex-row sm:justify-center md:justify-center lg:px-0 relative"
>
  <div
    class="relative sm:-mb-[5px] sm:h-full sm:min-h-[175px] sm:w-full md:h-[175px] lg:mb-0 lg:h-full lg:min-h-[250px] lg:w-[40%]"
  >
    <Section1Wave />
  </div>

  <div
    class="sm:freq-container md:freq-container relative border-navy sm:w-full sm:border-0 sm:pr-[65px] md:w-[100%] md:border-0 md:pr-[140px] lg:w-[60%] lg:border-b-[5px] lg:pl-0 lg:pr-[140px]"
  >
    <section class="flex max-w-[800px] flex-col gap-6 sm:-mb-[0px] lg:mb-[80px]">
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
  </div>
  <div
    class="absolute -rotate-90 text-[150px] font-black leading-none text-teal sm:-right-3 sm:bottom-[100px] sm:text-75 md:text-100 lg:-right-6 lg:bottom-[26px]"
  >
    .01
  </div>
</SectionWrapper>
