<script lang="ts">
  export let label: string;
  export let imgSrc: string;
  export let href: string;
</script>

<a
  aria-label={label}
  class="h-[38px] w-[38px] rounded bg-black p-1 transition-colors duration-[0.3s] hover:bg-indigo"
  {href}
  target="_blank"
>
  <img src={imgSrc} alt="" />
</a>
