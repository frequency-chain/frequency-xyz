<script lang="ts">
  export let icon = '';
  export let iconAlt = '';
  export let title = '';
</script>

<div class="max-w-full md:max-w-[500px] lg:max-w-[370px]">
  <div class="flex items-center gap-f16 pb-f16 md:gap-f32">
    <img src={icon} alt={iconAlt} />
    <h3 class="title-h3">{title}</h3>
  </div>

  <div class="body">
    <slot name="body" />
  </div>
</div>
