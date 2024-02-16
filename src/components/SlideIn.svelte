<script lang="ts">
  import viewport from '$lib/util/useViewportAction';

  let slide = '';
</script>

<div
  class={slide}
  use:viewport
  on:enterViewport={() => (slide = 'slide-from-right')}
  on:exitViewport={() => (slide = '')}
>
  <slot />
</div>
