<script lang="ts">
  import ThePeoplesBid from '$lib/assets/Ecosystem/the-peoples-bid.svg';
  interface Props {
    [key: string]: any;
  }

  let { ...rest }: Props = $props();
</script>

<div class={rest.class}>
  <img alt="The People's Bid for TikTok" src={ThePeoplesBid} />
</div>
