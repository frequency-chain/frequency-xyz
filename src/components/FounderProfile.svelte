<script lang="ts">
  export let imgSrc: string;
  export let name: string;
</script>

<div class="max-w-[100px] sm:text-indigo lg:text-cream">
  <img src={imgSrc} alt="headshot" class="mb-4 h-[100px] rounded-full drop-shadow-md" />
  <p class="text-wrap text-center font-semibold leading-none">{name}</p>
</div>
