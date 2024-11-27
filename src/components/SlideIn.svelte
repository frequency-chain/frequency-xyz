<script lang="ts">
  import viewport from '$lib/util/useViewportAction';

  let { class: klass = '', children } = $props();
  let slide = $state('');
</script>

<div
  class={`slide-out transition-all duration-1000 ${slide} ${klass}`}
  use:viewport
  {...{ onenterViewport: () => (slide = 'slide-in') } as any}
  {...{ onexitViewport: () => (slide = '') } as any}
>
  {@render children?.()}
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
