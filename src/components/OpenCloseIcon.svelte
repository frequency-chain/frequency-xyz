<script lang="ts">
  export let onClick: () => void;
  export let isOpen: boolean;
  export let classes: string = '';
</script>

<button
  aria-label="Open main navigation"
  aria-controls="mobile-navigation"
  on:click|preventDefault={onClick}
  class={`z-50 ${classes}`}
>
  <svg class="h-[40px] w-[40px]" role="none">
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class={`origin-left translate-y-[20%] stroke-[10%] transition-all duration-[0.3s] ${isOpen ? 'translate-x-[8px] translate-y-[35%] -rotate-45 stroke-cream' : 'stroke-indigo rotate-0'}`}
    />
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class={`origin-left translate-y-[-20%] stroke-[10%] transition-all duration-[0.3s] ${isOpen ? 'translate-x-[8px] translate-y-[-35%] rotate-45 stroke-cream' : 'stroke-indigo rotate-0'}`}
    />
  </svg>
</button>
