<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionParagraph from '../SectionParagraph.svelte';
  import SectionContent from '../SectionContent.svelte';
</script>

<SectionWrapper id="about">
  <div class="freq-container">
    <SectionContent classes="">
      <div class="">
        <SlideIn>
          <h2 class="title-100">What is Frequency?</h2>
        </SlideIn>
      </div>

      <SectionParagraph classes="">
        Frequency is a blockchain designed to support decentralized social networks to give people control over their
        online presence. With Frequency, users can freely choose and connect on social apps while retaining ownership of
        their data. Built on the Decentralized Social Networking Protocol (DSNP), Frequency offers scalable tools for
        message discovery, flexible storage for social and identity data, and a unique cost-sharing model that allows
        apps to deliver smooth, secure experiences that put users in charge."
      </SectionParagraph>
    </SectionContent>
  </div>
  <div>[Image]</div>
</SectionWrapper>
