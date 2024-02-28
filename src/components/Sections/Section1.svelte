<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section1Wave from './Section1Wave.svelte';
  import SectionNumber from '../SectionNumber.svelte';
</script>

<SectionWrapper
  id="section1"
  classes="flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row sm:justify-center md:justify-center lg:px-0 vertical-lg:min-h-[450px]"
>
  <div
    class="relative sm:-mb-[8px] sm:h-full sm:min-h-[175px] sm:w-full md:-mb-[10px] md:h-[220px] lg:mb-0 lg:h-full lg:min-h-[250px] lg:w-[40%]"
  >
    <Section1Wave />
  </div>

  <div class="border-navy sm:border-0 sm:px-[30px] md:px-[40px] lg:w-[60%] lg:px-0 horizontal:border-b-[10px]">
    <section class="paragraph-spacing-left flex h-full max-w-[680px] flex-col gap-6 lg:pl-6 lg:pr-0">
      <SlideIn>
        <h2 class="title-75 text-teal">Build at a higher Frequency</h2>
      </SlideIn>
      <SlideIn>
        <p class="subtitle">Frequency Empowers the Social Web, Putting Control and Data Privacy in Your Hands</p>
      </SlideIn>
      <p class="body">
        Frequency contributes to the mission of creating a better web and world. It empowers individuals to ensure the
        portability of their content and safeguard their privacy. The protocol enables ownership of digital identity and
        control over online presence. In a world where technology can have both positive and negative effects,
        Frequency's focus is on what truly matters: people.
      </p>
    </section>
  </div>

  <SectionNumber classes="sm:text-teal sm:right-0 sm:bottom-[140px] md:bottom-0 z-10 lg:bottom-3">.01</SectionNumber>
</SectionWrapper>
