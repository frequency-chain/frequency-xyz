<script lang="ts">
  import SlideIn from '../../../components/SlideIn.svelte';
  import Placeholder from './Placeholder.svelte';
</script>

<div
  class="flex sm:justify-start sm:px-[50px] md:px-[50px] lg:justify-end lg:px-0 vertical-lg:justify-start vertical-lg:px-[30px]"
>
  <section class="flex h-full w-full flex-col gap-6 lg:w-[60%] lg:pl-6">
    <SlideIn>
      <h2 class="title-75 paragraph-spacing-left text-navy sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
        Build with Frequency
      </h2>
    </SlideIn>
    <SlideIn>
      <p class="title-50 paragraph-spacing-left text-orange sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
        Better with You
      </p>
    </SlideIn>
    <p class="body paragraph-spacing-left sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
      Everything here is open source. Our development roadmap is focussed on our mission of reclaiming the social graph
      for the common good and is guided by our principles. Infrastructure for the Next Generation Decentralized Social
      Internet.
    </p>
    <p class="body paragraph-spacing-left sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
      If this is your first visit, the DSNP whitepape is a good place to start. Where you go after depends on your
      goals: the nagivation panel gives some useful entry points.
    </p>
  </section>
</div>
<div>
  <Placeholder />
</div>
