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
      body: `<p>Connect with over 1 million users, each in charge of their digital experience.</p>
    <p>Create a single Universal Handle, Sign-On and Identity so you can connect, share and engage with audiences across multiple applications through a single identity.</p>`,
    },
    {
      icon: Control,
      iconAlt: 'Control',
      title: 'Control',
      body: `<p>Choose which applications to join and which to leave — you decide who can access your relationships and manage your data.</p>
    <p>Hold application providers accountable to the promises they have made you.  If they change in a way you don’t like, simply pick another provider.</p>
`,
    },
    {
      icon: Ownership,
      iconAlt: 'Ownership',
      title: 'Ownership',
      body: `<p>You built your social networks, followers, content, and behavioral data. With Frequency, you get to decide what data is shared and who benefits from its value.</p>
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
