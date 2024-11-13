<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SectionContent from '../SectionContent.svelte';
  import AboutImg from '$lib/assets/about.svg';
  import AboutRoadImg from '$lib/assets/aboutRoad.png';
</script>

<SectionWrapper id="about">
  <div class="freq-container flex items-center justify-between sm:flex-col-reverse sm:gap-0 md:flex-row md:gap-f48">
    <!-- Text content -->
    <SectionContent class="mx-auto sm:pb-f56 sm:pt-0 md:py-f56">
      <SlideIn>
        <h2 class="title-70 pb-f24 text-navy">What is<br /> Frequency?</h2>
      </SlideIn>

      <SectionParagraph class="text-sm md:max-w-[415px] lg:max-w-[415px]">
        Frequency is a blockchain designed to support decentralized social networks to give people control over their
        online presence. With Frequency, users can freely choose and connect on social apps while retaining ownership of
        their data. Built on the Decentralized Social Networking Protocol (<a
          href="https://dsnp.org/"
          target="_blank"
          rel="noreferrer"
          class="underline transition-colors hover:text-teal">DSNP</a
        >), Frequency offers scalable tools for message discovery, flexible storage for social and identity data, and a
        unique cost-sharing model that allows apps to deliver smooth, secure experiences that put users in charge.
      </SectionParagraph>
    </SectionContent>

    <!-- Right aligned image -->
    <img
      src={AboutImg}
      alt="About"
      class="md: -z-10 h-full overflow-hidden object-cover sm:h-[400px] sm:w-[80%] sm:max-w-[400px] sm:object-bottom md:h-[500px] md:max-h-[700px] md:w-[inherit] md:max-w-[450px] lg:object-[0_-180px]"
    />
  </div>
  <!-- Bottom border image -->
  <img src={AboutRoadImg} alt="AboutRoad" class="w-full object-cover sm:h-[185px] md:h-[250px] lg:h-[300px]" />
</SectionWrapper>
