<script lang="ts">
  let startWave = 'wave';
</script>

<div class={`absolute bottom-0 left-0 h-full sm:w-full md:w-[50%] lg:w-[80%]`}>
  <div class={startWave} />
</div>

<style>
  .wave {
    background: url(/src/lib/assets/Section2Waves.svg) no-repeat bottom;
    width: 100%;
    height: 100%;
  }
</style>
