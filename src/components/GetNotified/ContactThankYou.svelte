<script lang="ts">
  import ThankYouWaves from '$lib/assets/Contact/ThankYouWave.svg';

  export let onClick: (e: MouseEvent) => void;
</script>

<button class="flex cursor-pointer items-center justify-center" onclick={onClick}>
  <img src={ThankYouWaves} alt="Frequency waves with 'Thank you!' caption" />
</button>
