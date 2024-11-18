<script lang="ts">
  import { base } from '$app/paths';
  import LottieWrapper from '$lib/vendor/LottieWrapper.svelte';
</script>

<LottieWrapper
  class={$$restProps.class}
  src="{base}/animation/developer-dot.lottie"
  autoplay
  playOnVisible
  layout={{ fit: 'fit-width', align: [0.5, 0.4] }}
  renderConfig={{ autoResize: true }}
/>
