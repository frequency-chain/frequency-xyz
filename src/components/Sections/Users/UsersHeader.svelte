<script>
  import SlideIn from '$components/SlideIn.svelte';
  import UserAnimation from '../../Animations/User.svelte';
</script>

<div class="mx-auto flex max-w-(--breakpoint-xl) flex-col md:flex-row md:flex-wrap">
  <div class="w-full max-w-[700px] md:order-1 md:w-1/2 lg:order-3">
    <UserAnimation class="object-cover" />
  </div>
  <div class="freq-container-padding block md:w-1/2 md:self-end lg:hidden">
    <SlideIn>
      <h2 class="title-70 pb-f24">User<br /> Advantages</h2>
    </SlideIn>
  </div>
  <div class="freq-container-padding order-3 md:w-full lg:order-1 lg:mt-0 lg:w-1/2">
    <div class="hidden lg:block">
      <SlideIn>
        <h2 class="title-70 pb-f24">User<br /> Advantages</h2>
      </SlideIn>
    </div>
    <p class="title-h5 max-w-[900px]">
      On most social media platforms, you get a stark choice: accept the platform as is, or leave the platform, your
      friends and your relationships behind. Frequency changes all of this by offering users control, community, and
      ownership over their online experience.
    </p>
  </div>
</div>
