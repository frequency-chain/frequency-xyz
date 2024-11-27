<script lang="ts">
  // FORKED to support:
  // - Svelte 5 cleanly and have access to the latest @lottiefiles/dotlottie-web
  // - Styles to support better responsiveness
  // - WebWorker for performance `DotLottieWorker as DotLottie`, src to full url if needed for the Worker, and workerId.
  // - playOnVisible: Added support for viewport playing
  // ORGINAL SOURCE (MIT LICENSED): https://github.com/LottieFiles/dotlottie-web/blob/main/packages/svelte/src/lib/Dotlottie.svelte
  import { onMount } from 'svelte';
  import { DotLottieWorker as DotLottie, type Config } from '@lottiefiles/dotlottie-web';
  import viewport from '$lib/util/useViewportAction';

  export function setWasmUrl(url: string): void {
    DotLottie.setWasmUrl(url);
  }

  export let autoplay: Config['autoplay'] = false;
  export let backgroundColor: Config['backgroundColor'] = undefined;
  export let data: Config['data'] = undefined;
  export let loop: Config['loop'] = false;
  export let mode: Config['mode'] = 'forward';
  export let renderConfig: Config['renderConfig'] = undefined;
  export let segment: Config['segment'] = undefined;
  export let speed: Config['speed'] = 1;
  export let src: Config['src'] = undefined;
  export let useFrameInterpolation: Config['useFrameInterpolation'] = true;
  export let marker: Config['marker'] = undefined;
  export let layout: Config['layout'] = undefined;

  export let playOnHover: boolean = false;
  export let animationId: string = '';
  export let themeId: string = '';
  export let themeData: string = '';

  export let playOnVisible: boolean = false;

  export let dotLottieRefCallback: (dotLottie: DotLottie) => void = () => {};

  const hoverHandler = (event: MouseEvent) => {
    if (!playOnHover || !dotLottie.isLoaded) return;

    if (event.type === 'mouseenter') {
      dotLottie.play();
    } else if (event.type === 'mouseleave') {
      dotLottie.pause();
    }
  };

  let dotLottie: DotLottie;
  let canvas: HTMLCanvasElement;
  let prevSrc: string | undefined = undefined;
  let prevData: Config['data'] = undefined;
  // Render each different src in a different worker
  let workerId = 'lottie-' + src?.replace('/', '-');

  onMount(() => {
    const shouldAutoplay = autoplay && !playOnHover;
    dotLottie = new DotLottie({
      canvas,
      src: src?.includes('://') ? src : new URL(src || '', self.location.href).toString(),
      autoplay: shouldAutoplay,
      loop,
      speed,
      data,
      renderConfig: playOnVisible ? { freezeOnOffscreen: false, ...renderConfig } : renderConfig,
      segment,
      useFrameInterpolation,
      backgroundColor,
      mode,
      layout,
      workerId,
    });

    if (dotLottieRefCallback) {
      dotLottieRefCallback(dotLottie);
    }

    canvas.addEventListener('mouseenter', hoverHandler);
    canvas.addEventListener('mouseleave', hoverHandler);

    return () => {
      canvas.removeEventListener('mouseenter', hoverHandler);
      canvas.removeEventListener('mouseleave', hoverHandler);
      dotLottie.destroy();
    };
  });

  $: {
    if (dotLottie && typeof layout === 'object') {
      dotLottie.setLayout(layout);
    }
  }

  $: {
    if (dotLottie && typeof marker === 'string') {
      dotLottie.setMarker(marker);
    }
  }

  $: {
    if (dotLottie && dotLottie.isLoaded && typeof speed == 'number') {
      dotLottie.setSpeed(speed);
    }
  }

  $: {
    if (dotLottie && dotLottie.isLoaded && typeof useFrameInterpolation == 'boolean') {
      dotLottie.setUseFrameInterpolation(useFrameInterpolation);
    }
  }

  $: {
    if (
      dotLottie &&
      dotLottie.isLoaded &&
      Array.isArray(segment) &&
      segment.length === 2 &&
      typeof segment[0] === 'number' &&
      typeof segment[1] === 'number'
    ) {
      let [start, end] = segment;
      dotLottie.setSegment(start, end);
    }
  }

  $: {
    if (dotLottie && dotLottie.isLoaded && typeof loop == 'boolean') {
      dotLottie.setLoop(loop);
    }
  }

  $: {
    if (dotLottie) {
      dotLottie.setBackgroundColor(backgroundColor || '');
    }
  }

  $: {
    if (dotLottie && dotLottie.isLoaded && typeof mode == 'string') {
      dotLottie.setMode(mode);
    }
  }

  $: if (dotLottie && src !== prevSrc) {
    dotLottie.load({
      src: src?.includes('://') ? src : new URL(src || '', self.location.href).toString(),
      autoplay,
      loop,
      speed,
      data,
      renderConfig: playOnVisible ? { freezeOnOffscreen: false, ...renderConfig } : renderConfig,
      segment,
      useFrameInterpolation,
      backgroundColor,
      mode,
      marker,
      layout,
      workerId,
    } as any);
    prevSrc = src = data as any;
  }

  $: if (dotLottie && data !== prevData) {
    dotLottie.load({
      src,
      autoplay,
      loop,
      speed,
      data,
      renderConfig: playOnVisible ? { freezeOnOffscreen: false, ...renderConfig } : renderConfig,
      segment,
      useFrameInterpolation,
      backgroundColor,
      mode,
      marker,
      layout,
      workerId,
    } as any);
    prevData = data as any;
  }

  $: if (dotLottie && dotLottie.isLoaded && dotLottie.activeAnimationId !== animationId) {
    (dotLottie as any).loadAnimation(animationId);
  }

  $: if (dotLottie && dotLottie.isLoaded && dotLottie.activeThemeId !== themeId) {
    (dotLottie as any).loadTheme(themeId);
  }

  $: if (dotLottie && dotLottie.isLoaded) {
    (dotLottie as any).loadThemeData(themeData);
  }

  function onEnterCanvas() {
    console.log('here');
    dotLottie?.setFrame(0);
    dotLottie?.play();
  }
</script>

{#if playOnVisible}
  <canvas
    class="block h-full w-full {$$restProps.class}"
    bind:this={canvas}
    use:viewport={{ threshold: 0.3 }}
    {...{ onenterViewport: () => onEnterCanvas() } as any}
    {...{ onexitViewport: () => dotLottie?.stop() } as any}
  >
  </canvas>
{:else}
  <canvas class={$$restProps.class} bind:this={canvas}></canvas>
{/if}
