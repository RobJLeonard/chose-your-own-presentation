import type { Story } from '~/types/story'

/** Demo branching story — add scenes here and wire `nextSceneId` values. */
export const story: Story = {
  title: 'The fork in the path',
  startSceneId: 'intro',
  scenes: [
    {
      id: 'intro',
      title: 'A quiet morning',
      body: 'You stand where the woodland track splits. Sunlight filters through the leaves. One path slopes gently toward a river sound; the other narrows into a cool, dark opening in the hillside.',
      image: '/story/path.svg',
      choices: [
        {
          label: 'Follow the open track into the forest',
          description: 'Birdsong and soft earth underfoot.',
          nextSceneId: 'forest'
        },
        {
          label: 'Step toward the cave mouth',
          description: 'Air grows colder; stone glints ahead.',
          nextSceneId: 'cave'
        }
      ]
    },
    {
      id: 'forest',
      title: 'Beneath the canopy',
      body: 'The trees close overhead. Ferns brush your ankles. Ahead, the trail forks again: one branch descends toward rushing water, the other opens into a sunlit clearing.',
      choices: [
        {
          label: 'Head down to the river',
          description: 'You hear pebbles shifting in the current.',
          nextSceneId: 'riverbank'
        },
        {
          label: 'Walk toward the clearing',
          description: 'Warm light flickers through the trunks.',
          nextSceneId: 'meadow'
        }
      ]
    },
    {
      id: 'riverbank',
      title: 'The stony shore',
      body: 'The bank is slick with moss. Dragonflies skim the surface. One more bend and the river opens wide.',
      choices: [
        {
          label: 'Sit and watch the water',
          description: 'Let the current carry the tale to its close.',
          nextSceneId: 'river'
        }
      ]
    },
    {
      id: 'meadow',
      title: 'Edge of the glade',
      body: 'Grasshoppers leap from your path. The clearing glows ahead like a stage lit for an encore.',
      choices: [
        {
          label: 'Step into the open',
          description: 'End this chapter in sunlight.',
          nextSceneId: 'clearing'
        }
      ]
    },
    {
      id: 'cave',
      title: 'The limestone passage',
      body: 'Your footsteps echo. The tunnel splits: one way glimmers with reflected colour; the other is pitch black and narrow.',
      choices: [
        {
          label: 'Move toward the coloured light',
          description: 'Crystals catch a beam from somewhere above.',
          nextSceneId: 'crystalChamber'
        },
        {
          label: 'Take the narrow tunnel',
          description: 'You feel a draft against your face.',
          nextSceneId: 'darkTunnel'
        }
      ]
    },
    {
      id: 'river',
      title: 'By the water',
      body: 'The river is quick and clear. You find a flat stone to rest on and watch the current. The story pauses here — you chose the river path.',
      choices: []
    },
    {
      id: 'clearing',
      title: 'The sunlit glade',
      body: 'Wildflowers nod in a warm breeze. A good place to stop and breathe. Your woodland walk ends in peace.',
      choices: []
    },
    {
      id: 'crystalChamber',
      title: 'Chamber of light',
      body: 'Stalactites hang like frozen music. Light pools on the floor. You leave the cave with a quiet sense of wonder.',
      choices: []
    },
    {
      id: 'darkTunnel',
      title: 'The long dark',
      body: 'You crawl until the passage widens. A thin line of daylight marks the exit. You emerge blinking — another ending, another story.',
      choices: []
    }
  ]
}
