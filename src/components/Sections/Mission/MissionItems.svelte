<script>
  import MissionItem from '$components/Sections/Mission/MissionItem.svelte';
  import App from '$lib/assets/MissionIcons/App.svg';
  import Box from '$lib/assets/MissionIcons/Box.svg';
  import Fingerprint from '$lib/assets/MissionIcons/Fingerprint.svg';
  import Network from '$lib/assets/MissionIcons/Network.svg';
  import Universe from '$lib/assets/MissionIcons/Universe.svg';
  import Users from '$lib/assets/MissionIcons/Users.svg';

  const missionItems = [
    {
      iconAlt: 'Fingerprint',
      icon: Fingerprint,
      body: `Offering everyone a self-sovereign <span class="font-bold text-teal">digital social iconAltentity</span> that they may use
      to sign in and share data across the applications they choose.`,
    },
    {
      iconAlt: 'App',
      icon: App,
      body: `Allowing people to <span class="font-bold text-teal">freely move among applications</span> and proviconAlters rather than
      being forced to accept application changes that worsen their experience.`,
    },
    {
      iconAlt: 'Network',
      icon: Network,
      body: `Offering application proviconAlters practical <span class="font-bold text-teal">economics</span> that make blockchain usage
      feasible and desirable.`,
    },
    {
      iconAlt: 'Users',
      icon: Users,
      body: `Securely storing each <span class="font-bold text-teal">person's relationships</span> (social graph) so they are not
      controlled by any application or company, and can only be accessed with user permission.`,
    },
    {
      iconAlt: 'Box',
      icon: Box,
      body: `Creating an <span class="font-bold text-teal">interoperable</span> social media public commons where everyone can participate
      in the conversation.`,
    },
    {
      iconAlt: 'Universe',
      icon: Universe,
      body: `Creating a shared and <span class="font-bold text-teal">decentralized</span> economy where everyone can participate
      in the shared value they have created on the internet.`,
    },
  ];
</script>

<div class="grid gap-f64 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {#each missionItems as item}
    <MissionItem>
      <span slot="icon"><img src={item.icon} alt={item.iconAlt} /></span>
      <p slot="body">{@html item.body}</p>
    </MissionItem>
  {/each}
</div>
