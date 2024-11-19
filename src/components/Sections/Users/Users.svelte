<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import SectionContent from '../../SectionContent.svelte';
  import UsersItems from './UsersItems.svelte';
  import UsersHeader from './UsersHeader.svelte';
</script>

<SectionWrapper id="users" class="relative bg-navy pb-f96 pt-0 text-white lg:py-f128">
  <SectionContent class="flex flex-col gap-f56">
    <UsersHeader />
    <div class="freq-container">
      <UsersItems />
    </div>
  </SectionContent>
</SectionWrapper>
