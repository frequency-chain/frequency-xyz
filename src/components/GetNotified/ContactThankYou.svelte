<script lang="ts">
  import ThankYouWaves from '$lib/assets/ThankYouWaves.png';

  let { onClick = async () => {}, classes = '' } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="flex items-center justify-center" onclick={onClick}>
  <img
    class="px-auto mx-auto block {classes}"
    width="400"
    src={ThankYouWaves}
    alt="Frequency waves with 'Thank you!' caption"
  />
</div>
