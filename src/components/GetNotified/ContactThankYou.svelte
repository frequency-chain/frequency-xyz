<script lang="ts">
  import ThankYouWaves from '$lib/assets/Contact/ThankYouWave.svg';
  export let onClick = (e: Event) => {};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="flex cursor-pointer items-center justify-center" onclick={onClick}>
  <img src={ThankYouWaves} alt="Frequency waves with 'Thank you!' caption" />
</div>
