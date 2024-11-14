<script lang="ts">
  import SectionWrapper from '../SectionWrapper.svelte';
  import SectionContent from '../../SectionContent.svelte';
  import UsersItems from './UsersItems.svelte';
  import UsersHeader from './UsersHeader.svelte';
  import PlaceholderUsers from '$lib/assets/UsersIcons/PlaceholderUsers.png';
</script>

<SectionWrapper id="users" class="relative bg-navy pb-f128 pt-0 text-white lg:py-f128">
  <SectionContent class="freq-container flex flex-col gap-f56">
    <div class="flex flex-col-reverse gap-f24 md:gap-0 lg:flex-row lg:gap-f56">
      <UsersHeader />
      <img
        src={PlaceholderUsers}
        alt="PlaceholderUsers"
        class="ml-auto w-full max-w-[700px] object-contain lg:-mr-f64 lg:w-[45%]"
      />
    </div>
    <UsersItems />
  </SectionContent>
</SectionWrapper>
