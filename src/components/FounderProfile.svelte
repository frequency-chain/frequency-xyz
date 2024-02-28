<script lang="ts">
  import LinkedInLogo from '../lib/assets/LinkedInLogo.svg';
  export let imgSrc: string;
  export let name: string;
  export let linkedinUrl: string;
</script>

<div class="max-w-[100px] sm:text-indigo lg:text-cream">
  <a href={linkedinUrl} target="_blank">
    <div class="relative">
      <img src={imgSrc} alt="headshot" class="mb-4 h-[100px] rounded-full drop-shadow-lg" />
      <img src={LinkedInLogo} alt="linkedin" class="absolute bottom-0 right-0" />
    </div>
    <p class="text-wrap text-center font-semibold leading-none">{name}</p>
  </a>
</div>
