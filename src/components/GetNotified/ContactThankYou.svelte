<script lang="ts">
  import ThankYouWaves from '$lib/assets/Contact/ThankYouWave.svg';

  interface Props {
    onClick: (e: MouseEvent) => void;
  }

  let { onClick }: Props = $props();
</script>

<button class="flex cursor-pointer items-center justify-center" onclick={onClick}>
  <img src={ThankYouWaves} alt="Frequency waves with 'Thank you!' caption" />
</button>
