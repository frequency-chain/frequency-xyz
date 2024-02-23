<script lang="ts">
  export let onClick: () => void;
  export let isOpen: boolean;
  export let classes: string = '';
</script>

<button on:click|preventDefault={onClick} class={`z-50 ${classes}`}>
  <svg class="h-[40px] w-[40px]">
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class={`origin-left translate-y-[20%] stroke-[10%] transition-all duration-[0.3s] ${isOpen ? 'translate-x-[8px] translate-y-[35%] -rotate-45 stroke-cream' : 'rotate-0 stroke-indigo'}`}
    />
    <line
      x1="0"
      y1="50%"
      x2="100%"
      y2="50%"
      class={`origin-left translate-y-[-20%] stroke-[10%] transition-all duration-[0.3s] ${isOpen ? 'translate-x-[8px] translate-y-[-35%] rotate-45 stroke-cream' : 'rotate-0 stroke-indigo'}`}
    />
  </svg>
</button>
