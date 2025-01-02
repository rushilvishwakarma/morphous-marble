---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://i.ibb.co/c1z55sx/rushil-profile.jpg',
    name: 'Rushil',
    title: 'Team Member',
    links: [
      { icon: 'github', link: 'https://github.com/hyperglass' },
    ]
  },
  {
    avatar: 'https://i.ibb.co/8XGXZHj/stefan-profile.jpg',
    name: 'Stefan',
    title: 'Team Member',
    links: [
    ]
  },
  {
    avatar: 'https://svgshare.com/i/17E4.svg',
    name: 'Hyde',
    title: 'Team Member',
    links: [
    ]
  }
  // Add more members as needed
]

const special_thanks = [
  {
    avatar: 'https://svgshare.com/i/17E4.svg',
    name: 'Joey',
    title: 'Evolution X Lead',
    links: [
      { icon: 'github', link: 'https://github.com/Evolution-XYZ' },
      { icon: 'discord', link: 'https://evolution-x.org/' }
    ]
  },
  // Add more members as needed
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Introducing the Member of Gladious
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers
    :members="members"
  />

  <VPTeamPageTitle>
    <template #title>
      Special Thanks
    </template>
    <template #lead>
      Special thanks to these individuals. This project wouldn't have been possible without them.
    </template>
  </VPTeamPageTitle>

  <VPTeamMembers
    :members="special_thanks"
  />
</VPTeamPage>