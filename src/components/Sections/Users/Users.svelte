<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import SectionContent from '../../SectionContent.svelte';
  import UsersItems from './UsersItems.svelte';
  import UsersHeader from './UsersHeader.svelte';
  import PlaceholderUsers from '$lib/assets/UsersIcons/PlaceholderUsers.png';
</script>

<SectionWrapper id="users" class="relative bg-navy text-white sm:pb-f128 sm:pt-0 lg:py-f128">
  <SectionContent class="freq-container flex flex-col gap-f56">
    <div class="flex sm:flex-col-reverse sm:gap-f24 md:gap-0 lg:flex-row lg:gap-f56">
      <UsersHeader />
      <img
        src={PlaceholderUsers}
        alt="PlaceholderUsers"
        class="ml-auto max-w-[700px] object-contain sm:w-full lg:-mr-f64 lg:w-[45%]"
      />
    </div>
    <UsersItems />
  </SectionContent>
</SectionWrapper>
