<script lang="ts">
  export let imgSrc: string;
  export let name: string;
  export let linkedinUrl: string;
</script>

<div class="max-w-[100px] sm:text-indigo lg:text-cream">
  <a href={linkedinUrl} target="_blank">
    <img src={imgSrc} alt="headshot" class="mb-4 h-[100px] rounded-full drop-shadow-md" />
  </a>
  <p class="text-wrap text-center font-semibold leading-none">{name}</p>
</div>
