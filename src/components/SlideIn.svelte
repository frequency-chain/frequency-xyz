<script lang="ts">
  import viewport from '$lib/util/useViewportAction';

  let slide = '';
</script>

<div
  class={`slide-out transition-all duration-1000 ${slide}`}
  use:viewport
  on:enterViewport={() => (slide = 'slide-in')}
  on:exitViewport={() => (slide = '')}
>
  <slot />
</div>

<style>
  .slide-out {
    opacity: 0;
    transform: translateX(10%);
  }

  .slide-in {
    opacity: 1;
    transform: translateX(0%);
  }
</style>
