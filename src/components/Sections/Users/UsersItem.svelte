<script lang="ts">
  export let icon = '';
  export let iconAlt = '';
  export let title = '';
  export let body = '';
</script>

<div class="sm:max-w-full md:max-w-[500px] lg:max-w-[370px]">
  <div class="flex items-center gap-f32 pb-f16">
    <img src={icon} alt={iconAlt} />
    <h3 class="title-44">{title}</h3>
  </div>

  <slot name="body" />
</div>
