<script lang="ts">
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="users" classes="z-0 flex sm:pt-[40px] text-white">
  <!-- Text Content -->
  <section class="">
    <div class="relative sm:pb-[100px] lg:pb-0">
      <SlideIn>
        <h2 class="title-75 text-right text-navy sm:max-w-[300px] sm:pr-5 md:max-w-[400px] lg:max-w-[540px]">
          Take Your Content & Relationships With You
        </h2>
      </SlideIn>
    </div>
    <div class={`bg-teal sm:pb-[80px] sm:pt-[100px] lg:mr-0 lg:border-b-[5px] lg:border-yellow vertical-lg:pt-6`}>
      <SectionParagraph classes="sm:pr-[100px] md:pr-[140px] lg:px-0">
        Your followers and friends are yours to keep, with complete control in your hands. Frequency ensures that you
        can seamlessly bring your content and connections along to any exciting new experience within the Frequency
        Network. If you love experimenting, you can post to multiple experiences at once using your Frequency identity,
        which links you to the entire network of Frequency apps.
      </SectionParagraph>
    </div>
  </section>
</SectionWrapper>
