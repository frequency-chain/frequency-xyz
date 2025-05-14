<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import SectionContent from '../../SectionContent.svelte';
  import UsersItems from './UsersItems.svelte';
  import UsersHeader from './UsersHeader.svelte';
</script>

<SectionWrapper id="users" class="bg-navy pb-f96 lg:py-f128 relative pt-0 text-white">
  <SectionContent class="gap-f64 flex flex-col">
    <UsersHeader />
    <div class="freq-container">
      <UsersItems />
    </div>
  </SectionContent>
</SectionWrapper>
