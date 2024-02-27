<script lang="ts">
  let startWave = 'wave';
</script>

<div class={`absolute bottom-0 left-0 h-full w-full`}>
  <div class={startWave} />
</div>

<style>
  .wave {
    background: url(/src/lib/assets/section5waves.svg) no-repeat bottom;
    width: 30%;
    height: 100%;
    margin-right: 70%;
  }
</style>
