<script lang="ts">
  import DevPortalAnimation from '../../../components/Animations/DevPortal.svelte';
  import SlideIn from '$components/SlideIn.svelte';
</script>

<section
  class="freq-container xs:pb-f64 md:pb-f96 lg:pb-f24 flex flex-col lg:flex-row lg:items-center lg:justify-center"
>
  <div class="xs:max-h-[500px] flex h-[100vw] w-full self-center lg:h-[700px] lg:w-1/2">
    <DevPortalAnimation />
  </div>
  <div class="flex max-w-[930px] flex-col gap-6 lg:w-1/2">
    <SlideIn>
      <h1 class="title-70 text-primary">Get Started with Frequency Development</h1>
    </SlideIn>
    <SlideIn>
      <p class="title-h5 text-black">
        Frequency offers a variety of open source tools and documentation in the Developers Portal to help you rapidly
        get applications up and running on Frequency.
      </p>
    </SlideIn>
  </div>
</section>
