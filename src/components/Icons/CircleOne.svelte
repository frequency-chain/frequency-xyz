<script>
  let { width = '112' } = $props();
  import Grow from '../Grow.svelte';
</script>

<Grow>
  <svg {width} height="111" viewBox="0 0 112 111" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="55.75" cy="55.5" r="55.5" fill="#18465E" />
    <path
      d="M62.5 30.2C62.8 30.2 63.1 30.5 63.1 30.875V82.1C63.1 82.475 62.8 82.775 62.5 82.775H50.425C50.05 82.775 49.75 82.475 49.75 82.1V42.95C49.75 42.575 49.45 42.35 49.075 42.35H41.5C41.125 42.35 40.825 41.975 40.9 41.6L41.8 30.8C41.875 30.5 42.175 30.2 42.475 30.2H62.5Z"
      fill="white"
    />
  </svg>
</Grow>
