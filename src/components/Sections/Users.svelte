<script lang="ts">
  import SectionParagraph from '../SectionParagraph.svelte';
  import SlideIn from '../SlideIn.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
</script>

<SectionWrapper id="users" class="bg-navy text-white">
  <!-- Text Content -->
  <section class="freq-container">
    <div class="">
      <SlideIn>
        <h2 class="title-70">User Advantages</h2>
      </SlideIn>
    </div>
    <div>
      <SectionParagraph class="">
        On most social media platforms, you get a stark choice: accept the platform as is, or leave the platform, your
        friends and your relationships behind. Frequency changes all of this by offering users, control, community, and
        ownership over their online experience.
      </SectionParagraph>
    </div>
  </section>
</SectionWrapper>
