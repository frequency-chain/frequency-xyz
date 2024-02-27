<script lang="ts">
  export let imgSrc: string;
  export let label: string;
  export let onClick: () => void;
</script>

<button
  aria-label={label}
  class="h-[38px] w-[38px] rounded bg-black p-1 transition-colors duration-[0.3s] hover:bg-indigo"
  on:click|preventDefault={onClick}
>
  <img src={imgSrc} alt="" />
</button>
