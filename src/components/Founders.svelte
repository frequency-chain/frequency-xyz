<script lang="ts">
  import BraxtonHeadshot from '../lib/assets/headshots/Braxton.png';
  import HarryHeadshot from '../lib/assets/headshots/Harry.png';
  import FounderProfile from './FounderProfile.svelte';
  import SlideIn from './SlideIn.svelte';
</script>

<section class="flex flex-col gap-6 text-cream sm:-mb-[100px] lg:mb-[80px] vertical-lg:-mb-[100px]">
  <SlideIn>
    <h3 class="font-title text-xl tracking-wide">Meet the Founders</h3>
  </SlideIn>
  <div class="flex gap-6">
    <FounderProfile
      imgSrc={BraxtonHeadshot}
      name="Braxton Woodham"
      linkedinUrl="https://www.linkedin.com/in/braxton-woodham-a1498b"
    />
    <FounderProfile imgSrc={HarryHeadshot} name="Harry Evans" linkedinUrl="https://www.linkedin.com/in/harry-evans-" />
  </div>
</section>
