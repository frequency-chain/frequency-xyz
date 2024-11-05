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
          User Advantages
        </h2>
      </SlideIn>
    </div>
    <div class={`bg-teal sm:pb-[80px] sm:pt-[100px] lg:mr-0 lg:border-b-[5px] lg:border-yellow vertical-lg:pt-6`}>
      <SectionParagraph classes="sm:pr-[100px] md:pr-[140px] lg:px-0">
        On most social media platforms, you get a stark choice: accept the platform as is, or leave the platform, your
        friends and your relationships behind.  Frequency changes all of this by offering users, control, community, and
        ownership over their online experience.
      </SectionParagraph>
    </div>
  </section>
</SectionWrapper>
