<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import Section1Wave from './Section1Wave.svelte';
  import SectionNumber from '../SectionNumber.svelte';
</script>

<SectionWrapper id="section1" classes="lg:px-0">
  <div
    class="flex sm:justify-start sm:px-[30px] md:px-[40px] lg:justify-end lg:px-0 vertical-lg:justify-start vertical-lg:px-[30px]"
  >
    <section class="flex h-full w-full flex-col gap-6 lg:w-[60%] lg:pl-6">
      <SlideIn>
        <h2 class="title-75 paragraph-spacing-left text-teal sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
          Build at a higher Frequency
        </h2>
      </SlideIn>
      <SlideIn>
        <p class="subtitle paragraph-spacing-left sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
          Frequency Empowers the Social Web, Putting Control and Data Privacy in Your Hands
        </p>
      </SlideIn>
      <p class="body paragraph-spacing-left sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
        Frequency contributes to the mission of creating a better web and world. It empowers individuals to ensure the
        portability of their content and safeguard their privacy. The protocol enables ownership of digital identity and
        control over online presence. In a world where technology can have both positive and negative effects,
        Frequency's focus is on what truly matters: people.
      </p>
    </section>
  </div>

  <SectionNumber classes="text-teal sm:right-0 sm:bottom-[140px] z-10 lg:bottom-4">.01</SectionNumber>

  <div
    class="bottom-0 left-0 w-full sm:-mb-[9px] sm:block sm:h-[190px] md:-mb-[10px] md:h-[220px] lg:absolute lg:mb-0 lg:h-full vertical-lg:relative vertical-lg:-mb-[10px] vertical-lg:block"
  >
    <Section1Wave />
  </div>
</SectionWrapper>
