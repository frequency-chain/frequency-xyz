<script lang="ts">
  import UsersItem from './UsersItem.svelte';
  import Control from '$lib/assets/Users/Control.svg';
  import Community from '$lib/assets/Users/Community.svg';
  import Ownership from '$lib/assets/Users/Ownership.svg';

  const userItems = [
    {
      icon: Community,
      iconAlt: 'Community',
      title: 'Community',
      body: `<p>Connect with millions of people, each in charge of their digital experience.</p>
            <p>Create a single Universal Handle, sign-on, and identity to connect, share, and engage across multiple applications through a single identity.</p>`,
    },
    {
      icon: Control,
      iconAlt: 'Control',
      title: 'Control',
      body: `<p>Choose which applications to join and which to leave — manage data and decide who can access it.</p>
            <p>Hold application providers accountable to the promises they have made. If you're not happy, you can revoke access to your data and move to a different provider.</p>
`,
    },
    {
      icon: Ownership,
      iconAlt: 'Ownership',
      title: 'Ownership',
      body: `<p>Decide what data is shared and who benefits from its value.</p>
            <p>Harness the network effects of your content, data, and relationships in the future economy.</p>`,
    },
  ];
</script>

<div class="gap-f64 xs:grid-cols-1 mx-auto grid w-fit lg:grid-cols-3">
  {#each userItems as { icon, iconAlt, title, body } (title)}
    <UsersItem {icon} {iconAlt} {title}>
      <div class="gap-f16 flex flex-col">
        {@html body}
      </div>
    </UsersItem>
  {/each}
</div>
