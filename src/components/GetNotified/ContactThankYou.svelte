<script lang="ts">
  import ThankYouWaves from '$lib/assets/ThankYouWaves.png';

  let {
    onClick = async () => {},
    classes = '',
  } = $props();
</script>

<div class="flex justify-center items-center" onclick={onClick}>
<img
  class="block px-auto mx-auto {classes}"
  width='400'
  src="{ThankYouWaves}" alt="Frequency waves with 'Thank you!' caption" />
</div>
