<script lang="ts">
  import { base } from '$app/paths';
  import LottieWrapper from '$lib/vendor/LottieWrapper.svelte';
</script>

<LottieWrapper
  class={$$restProps.class}
  src="{base}/animation/home-dot.lottie"
  autoplay
  playOnVisible
  speed={0.8}
  layout={{ fit: 'fit-width', align: [0.5, 0.5] }}
  renderConfig={{ autoResize: true }}
/>
