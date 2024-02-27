<script lang="ts">
  export let section: number;
  export let sectionTitles: string[];
</script>

<div
  role="navigation"
  aria-label="Page Sections"
  class="freq-container absolute right-0 w-[50%] justify-between pl-0 pt-[32px] sm:hidden md:hidden lg:flex"
>
  {#each sectionTitles as title, i}
    <button
      aria-label={`Section ${i}: ${title}`}
      on:click={() => (section = i + 1)}
      class={`text-lg transition-opacity duration-700	 ${section === i + 1 ? 'opacity-100' : 'opacity-25'}`}
      >.0{i + 1}</button
    >
  {/each}
</div>
