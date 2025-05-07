<script lang="ts">
  import { base } from '$app/paths';
  import LottieWrapper from '$lib/vendor/LottieWrapper.svelte';
  type Props = Record<string, any>;

  let { ...rest }: Props = $props();
</script>

<LottieWrapper
  class={rest.class}
  src="{base}/animation/home-dot.lottie"
  autoplay
  playOnVisible
  speed={0.8}
  layout={{ fit: 'fit-width', align: [0.5, 0.5] }}
  renderConfig={{ autoResize: true }}
/>
