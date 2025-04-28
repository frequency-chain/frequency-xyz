<script lang="ts">
  interface Props {
    label: string;
    imgSrc: string;
    href: string;
  }

  let { label, imgSrc, href }: Props = $props();
</script>

<a
  aria-label={label}
  class="hover:bg-indigo h-[38px] w-[38px] rounded-sm bg-black p-1 transition-colors duration-[0.3s]"
  {href}
  target="_blank"
>
  <img src={imgSrc} alt="" />
</a>
