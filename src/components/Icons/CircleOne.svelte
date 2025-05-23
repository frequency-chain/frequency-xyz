<script>
  import Grow from '$components/Grow.svelte';
  let { width = '112', ...rest } = $props();
</script>

<Grow class={rest.class}>
  <svg {width} height="111" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 112 111"
    ><circle cx="55.75" cy="55.5" r="55.5" fill="#331e49" /><path
      fill="#fff"
      d="M62.5 30.2c.3 0 .6.3.6.675V82.1c0 .375-.3.675-.6.675H50.425a.672.672 0 0 1-.675-.675V42.95c0-.375-.3-.6-.675-.6H41.5c-.375 0-.675-.375-.6-.75l.9-10.8c.075-.3.375-.6.675-.6H62.5Z"
    /></svg
  >
</Grow>
