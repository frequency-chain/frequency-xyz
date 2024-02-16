<script lang="ts">
  import XLogo from '../lib/assets/XLogo.svg';
  import DiscordLogo from '../lib/assets/DiscordLogo.svg';
  import IconBtn from './IconBtn.svelte';
</script>

<div class="freq-container mt-[150px] w-[425px]">
  <h3 class="text-base font-semibold">Join the Digital Revolution</h3>
  <p class="text-sm">Become a part of shaping the future of the digital landscape with Frequency.</p>
  <div class="mt-4 flex gap-4">
    <IconBtn imgSrc={XLogo} onClick={() => {}} />
    <IconBtn imgSrc={DiscordLogo} onClick={() => {}} />
  </div>
</div>
