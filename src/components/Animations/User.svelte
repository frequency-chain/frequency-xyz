<script lang="ts">
  import { base } from '$app/paths';
  import LottieWrapper from '$lib/vendor/LottieWrapper.svelte';
  interface Props {
    [key: string]: any;
  }

  let { ...rest }: Props = $props();
</script>

<LottieWrapper
  class={rest.class}
  src="{base}/animation/user-dot.lottie"
  autoplay
  playOnVisible
  layout={{ fit: 'cover', align: [0.5, 0.5] }}
  renderConfig={{ autoResize: true }}
/>
