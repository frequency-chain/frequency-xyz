<script>
  import { fade } from 'svelte/transition';
  import OpenCloseIcon from './OpenCloseIcon.svelte';

  export let triggerText = 'Open Popup';
  let isPopupOpen = false;

  function togglePopup() {
    isPopupOpen = !isPopupOpen;
  }

  function closePopup() {
    isPopupOpen = false;
  }
</script>

<div class="fixed right-0 top-1/4 z-50 flex transform">
  <button
    class="origin-top-left -translate-y-1/2 translate-x-full rotate-90 cursor-pointer rounded-b-lg bg-teal px-4 py-2 text-white shadow-lg transition-shadow duration-300 hover:shadow-sm"
    on:click={togglePopup}
  >
    {triggerText}
  </button>
</div>

{#if isPopupOpen}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    transition:fade={{ duration: 200 }}
  >
    <div class="max-w-md mx-4 w-full rounded-lg bg-white p-6 shadow-xl">
      <OpenCloseIcon onClick={() => (isPopupOpen = !isPopupOpen)} isOpen={true} />
      <slot />
    </div>
  </div>
{/if}
