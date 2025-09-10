<script lang="ts">
  import SectionWrapper from './SectionWrapper.svelte';
  import WavesTwo from '../../lib/assets/Ecosystem/waves-two.svg';
  import GetNotified from '$components/GetNotified/GetNotified.svelte';
</script>

<SectionWrapper id="ecosystem">
  <div class="w-full overflow-hidden">
    <div class="h-[36px] bg-white lg:h-[61px]"></div>
    <div class="bg-darkPurple relative mb-[-36px] lg:mb-[-61px]">
      <div
        class="background bg-waves-two relative top-[-36px] z-10 h-[240px] max-w-none min-w-[1000px] bg-contain bg-top bg-repeat-x md:h-[260px] lg:top-[-61px] lg:h-[300px] lg:w-full xl:h-[360px]"
        style={`--waves-two: url("${WavesTwo}");`}
      ></div>
    </div>
  </div>
  <div class="bg-darkPurple pb-f64 md:pb-f96 relative mt-[-100px]">
    <GetNotified />
  </div>
</SectionWrapper>

<style>
  .bg-waves-two {
    background-image: var(--waves-two);
  }
</style>
