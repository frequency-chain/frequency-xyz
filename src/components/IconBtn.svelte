<script lang="ts">
  export let label: string;
  export let imgSrc: string;
  export let href: string;
</script>

<a
  aria-label={label}
  class="hover:bg-indigo h-[38px] w-[38px] rounded bg-black p-1 transition-colors duration-[0.3s]"
  {href}
  target="_blank"
>
  <img src={imgSrc} alt="" />
</a>
