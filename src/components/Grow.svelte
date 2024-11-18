<script lang="ts">
  import viewport from '$lib/util/useViewportAction';

  let grow = '';
</script>

<div
  class={`grow-out transition-all duration-1000 ${grow}`}
  use:viewport
  on:enterViewport={() => (grow = 'grow-in')}
  on:exitViewport={() => (grow = '')}
>
  <slot />
</div>

<style>
  .grow-out {
    scale: 75%;
    opacity: 0;
  }

  .grow-in {
    scale: 100%;
    opacity: 1;
  }
</style>
