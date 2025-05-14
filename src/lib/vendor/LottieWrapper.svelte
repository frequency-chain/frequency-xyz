<script lang="ts">
  import { run } from 'svelte/legacy';

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

  interface Props {
    autoplay?: Config['autoplay'];
    backgroundColor?: Config['backgroundColor'];
    data?: Config['data'];
    loop?: Config['loop'];
    mode?: Config['mode'];
    renderConfig?: Config['renderConfig'];
    segment?: Config['segment'];
    speed?: Config['speed'];
    src?: Config['src'];
    useFrameInterpolation?: Config['useFrameInterpolation'];
    marker?: Config['marker'];
    layout?: Config['layout'];
    playOnHover?: boolean;
    animationId?: string;
    themeId?: string;
    themeData?: string;
    playOnVisible?: boolean;
    dotLottieRefCallback?: (dotLottie: DotLottie) => void;
    [key: string]: any;
  }

  let {
    autoplay = false,
    backgroundColor = undefined,
    data = undefined,
    loop = false,
    mode = 'forward',
    renderConfig = undefined,
    segment = undefined,
    speed = 1,
    src = $bindable(undefined),
    useFrameInterpolation = true,
    marker = undefined,
    layout = undefined,
    playOnHover = false,
    animationId = '',
    themeId = '',
    themeData = '',
    playOnVisible = false,
    dotLottieRefCallback = () => {},
    ...rest
  }: Props = $props();

  const hoverHandler = (event: MouseEvent) => {
    if (!dotLottie) return;

    if (!playOnHover || !dotLottie.isLoaded) return;

    if (event.type === 'mouseenter') {
      dotLottie.play();
    } else if (event.type === 'mouseleave') {
      dotLottie.pause();
    }
  };

  let dotLottie: DotLottie | null = $state(null);
  let canvas: HTMLCanvasElement | null = $state(null);
  let prevSrc: string | undefined = $state(undefined);
  let prevData: Config['data'] = $state(undefined);
  // Render each different src in a different worker
  let workerId = 'lottie-' + src?.replace('/', '-');

  onMount(() => {
    if (!canvas) return;

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
      canvas?.removeEventListener('mouseenter', hoverHandler);
      canvas?.removeEventListener('mouseleave', hoverHandler);
      dotLottie?.destroy();
    };
  });

  run(() => {
    if (dotLottie && typeof layout === 'object') {
      dotLottie.setLayout(layout);
    }
  });

  run(() => {
    if (dotLottie && typeof marker === 'string') {
      dotLottie.setMarker(marker);
    }
  });

  run(() => {
    if (dotLottie && dotLottie.isLoaded && typeof speed == 'number') {
      dotLottie.setSpeed(speed);
    }
  });

  run(() => {
    if (dotLottie && dotLottie.isLoaded && typeof useFrameInterpolation == 'boolean') {
      dotLottie.setUseFrameInterpolation(useFrameInterpolation);
    }
  });

  run(() => {
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
  });

  run(() => {
    if (dotLottie && dotLottie.isLoaded && typeof loop == 'boolean') {
      dotLottie.setLoop(loop);
    }
  });

  run(() => {
    if (dotLottie) {
      dotLottie.setBackgroundColor(backgroundColor || '');
    }
  });

  run(() => {
    if (dotLottie && dotLottie.isLoaded && typeof mode == 'string') {
      dotLottie.setMode(mode);
    }
  });

  run(() => {
    if (dotLottie && src !== prevSrc) {
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
  });

  run(() => {
    if (dotLottie && data !== prevData) {
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
  });

  run(() => {
    if (dotLottie && dotLottie.isLoaded && dotLottie.activeAnimationId !== animationId) {
      (dotLottie as any).loadAnimation(animationId);
    }
  });

  run(() => {
    if (dotLottie && dotLottie.isLoaded && dotLottie.activeThemeId !== themeId) {
      (dotLottie as any).loadTheme(themeId);
    }
  });

  run(() => {
    if (dotLottie && dotLottie.isLoaded) {
      (dotLottie as any).loadThemeData(themeData);
    }
  });

  function onEnterCanvas() {
    dotLottie?.setFrame(0);
    dotLottie?.play();
  }
</script>

{#if playOnVisible}
  <canvas
    class="block h-full w-full {rest.class}"
    bind:this={canvas}
    use:viewport={{ threshold: 0.3 }}
    {...{ onenterViewport: () => onEnterCanvas() } as any}
    {...{ onexitViewport: () => dotLottie?.stop() } as any}
  >
  </canvas>
{:else}
  <canvas class={rest.class} bind:this={canvas}></canvas>
{/if}
