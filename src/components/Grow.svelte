<script lang="ts">
  import viewport from '$lib/util/useViewportAction';

  let { class: klass = '', children } = $props();
  let grow = $state('');
</script>

<div
  class="grow-out transition-all duration-1000 {grow} {klass}"
  use:viewport
  onenterViewport={() => (grow = 'grow-in')}
  onexitViewport={() => (grow = '')}
>
  {@render children?.()}
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
