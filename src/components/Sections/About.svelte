<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SectionContent from '../SectionContent.svelte';
  import AboutImg from '$lib/assets/about.svg';
</script>

<SectionWrapper id="about">
  <div class="freq-container flex justify-between items-center">
    <SectionContent>
      <div class="">
        <SlideIn>
          <h2 class="title-70 text-navy">What is Frequency?</h2>
        </SlideIn>
      </div>

      <div>
      <SectionParagraph class="text-sm max-w-[450px]">
        Frequency is a blockchain designed to support decentralized social networks to give people control over their
        online presence. With Frequency, users can freely choose and connect on social apps while retaining ownership of
        their data. Built on the Decentralized Social Networking Protocol (<a href="https://dsnp.org/" target="_blank" rel="noreferrer" class="underline hover:text-teal transition-colors">DSNP</a>), Frequency offers scalable tools for
        message discovery, flexible storage for social and identity data, and a unique cost-sharing model that allows
        apps to deliver smooth, secure experiences that put users in charge.
      </SectionParagraph>
      </div>
    </SectionContent>
    <img src={AboutImg} alt="About" class="h-full mt-[-180px] -z-10 max-h-[800px]" />
  </div>
</SectionWrapper>
