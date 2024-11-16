<script lang="ts">
  import { base } from '$app/paths';
  import LottieWrapper from '$lib/vendor/LottieWrapper.svelte';
</script>

<LottieWrapper
  class={$$restProps.class}
  src="{base}/animation/user-dot.lottie"
  autoplay
  playOnVisible
  layout={{ fit: 'cover', align: [0.5, 0.5] }}
  renderConfig={{ autoResize: true }}
/>
