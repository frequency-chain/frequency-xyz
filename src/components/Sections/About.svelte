<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SectionContent from '../SectionContent.svelte';
  import AboutAnimation from '../Animations/About.svelte';
  import RoadImg from '$lib/assets/About/road.jpg';
</script>

<SectionWrapper id="about">
  <div
    class="freq-container flex flex-col-reverse content-center items-center justify-center gap-0 md:flex-row md:items-center md:gap-f48 lg:gap-f24"
  >
    <!-- Text content -->
    <SectionContent class="m-auto pb-f56 pt-0 md:py-f96">
      <SlideIn>
        <h2 class="title-70 pb-f24 pt-f12 text-primary">What is<br /> Frequency?</h2>
      </SlideIn>

      <SectionParagraph class="body md:max-w-[415px] lg:max-w-[415px]">
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
    <div class="flex h-[200px] max-h-[600px] w-full self-stretch overflow-hidden md:h-auto lg:max-w-[50%]">
      <div class="flex h-[600px] w-full -translate-y-1/4 md:h-auto md:translate-y-0">
        <AboutAnimation />
      </div>
    </div>
  </div>
  <!-- Bottom border image -->
  <img src={RoadImg} alt="AboutRoad" class="h-[145px] w-full object-cover sm:h-[185px] md:h-[250px] lg:h-[300px]" />
</SectionWrapper>
