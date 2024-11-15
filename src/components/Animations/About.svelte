<script lang="ts">
  import { base } from '$app/paths';
  import LottieWrapper from '$lib/vendor/LottieWrapper.svelte';
</script>

<LottieWrapper
  src="{base}/animation/about-dot.lottie"
  autoplay
  playOnVisible
  layout={{ fit: 'contain', align: [0.5, 0.5] }}
  renderConfig={{ autoResize: true }}
/>
