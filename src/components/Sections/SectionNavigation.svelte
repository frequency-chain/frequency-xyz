<script lang="ts">
  export let section: number;
</script>

<div class="freq-container absolute right-0 w-[50vw] justify-between pl-0 pt-[32px] sm:hidden md:hidden lg:flex">
  {#each { length: 5 } as _, i}
    <button
      on:click={() => (section = i + 1)}
      class={`text-lg transition-opacity duration-700	 ${section === i + 1 ? 'opacity-100' : 'opacity-25'}`}
      >.0{i + 1}</button
    >
  {/each}
</div>
