<script lang="ts">
  import DevPortalAnimation from '../../../components/Animations/DevPortal.svelte';
  import SlideIn from '$components/SlideIn.svelte';
</script>

<section
  class="freq-container flex flex-col xs:pb-f56 md:pb-f96 lg:flex-row lg:items-center lg:justify-center lg:pb-f24"
>
  <div class="flex h-[100vw] w-full self-center xs:max-h-[500px] lg:h-[700px] lg:w-1/2">
    <DevPortalAnimation />
  </div>
  <div class="flex flex-col gap-6 lg:w-1/2">
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
