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
    class="freq-container md:gap-f48 lg:gap-f24 flex flex-col-reverse content-center items-center justify-center gap-0 md:flex-row md:items-center"
  >
    <!-- Text content -->
    <SectionContent class="pb-f64 md:py-f96 m-auto pt-0">
      <SlideIn>
        <h2 class="title-70 pb-f24 pt-f12 text-primary">What is<br /> Frequency?</h2>
      </SlideIn>

      <SectionParagraph class="body md:max-w-[415px] lg:max-w-[415px]">
        Frequency is a decentralized open-source digital infrastructure layer that provides the backbone for an internet
        where people, not platforms, control their own data and relationships. It enables the creation of self-sovereign
        digital identities, public social graphs, and decentralized context sharing-free from the walled gardens of
        centralized platforms. Built on the Decentralized Social Networking Protocol (<a
          href="https://dsnp.org/"
          target="_blank"
          rel="noreferrer"
          class="hover:text-primary underline transition-colors">DSNP</a
        >), Frequency offers transparency and consent at its core. Our infrastructure enables builders to create
        products that empower people to carry their data across platforms without surrendering control over their
        information to a single company, product or model.
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
