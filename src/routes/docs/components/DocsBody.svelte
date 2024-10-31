<script lang="ts">
  import Placeholder from './Placeholder.svelte';
</script>

<div class="mx-auto flex-grow justify-center px-4 sm:px-6 lg:px-8">
  <section class="flex h-full w-full flex-col gap-6 lg:w-[60%] lg:flex-row lg:pl-6">
    <div class="flex-shrink-0 lg:w-1/3">
      <Placeholder />
    </div>
    <div class="flex flex-col gap-6 lg:w-2/3">
      <h2 class="title-75 paragraph-spacing-right text-navy">Build with Frequency</h2>
      <p class="title-50 paragraph-spacing-right text-orange">Better with You</p>
      <p class="body paragraph-spacing-right">
        Everything here is open source. Our development roadmap is focused on our mission of reclaiming the social graph
        for the common good and is guided by our principles. Infrastructure for the Next Generation Decentralized Social
        Internet.
      </p>
      <p class="body paragraph-spacing-right">
        If this is your first visit, the DSNP whitepaper is a good place to start. Where you go after depends on your
        goals: the navigation panel gives some useful entry points.
      </p>
    </div>
  </section>
</div>
