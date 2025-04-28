<script lang="ts">
  interface Props {
    icon?: string;
    iconAlt?: string;
    title?: string;
    body?: import('svelte').Snippet;
  }

  let { icon = '', iconAlt = '', title = '', body }: Props = $props();
</script>

<div class="max-w-full md:max-w-[500px] lg:max-w-[370px]">
  <div class="gap-f16 pb-f16 md:gap-f32 flex items-center">
    <img src={icon} alt={iconAlt} />
    <h3 class="title-h3">{title}</h3>
  </div>

  <div class="body">
    {@render body?.()}
  </div>
</div>
