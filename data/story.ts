import type { Story } from '~/types/story'

/**
 * Branching story from the Fry-Up Prep FigJam board.
 * Routing is defined per choice; only the intended path advances to the next decision.
 */
export const story: Story = {
  title: 'From Problem to Launch',
  startSceneId: 'intro',
  scenes: [
    {
      id: 'intro',
      title: 'Problem space',
      body: 'We need to strengthen the journey for “Good Fit HEC” customers. A references experience that works could unlock real value for Zinc — if we make the right calls from problem through to launch.',
      choices: [
        {
          label: 'Start the journey',
          description: 'See where the first decision takes us.',
          nextSceneId: 'd1_problem'
        }
      ]
    },

    {
      id: 'd1_problem',
      title: 'Decision 1 — Problem choice',
      body: 'A customer problem has surfaced. How should we decide what to build?',
      choices: [
        {
          label: 'Griffin brainstorm',
          description:
            'Get the tech team down to the Griffin for a few drinks and see what good ideas pop up.',
          nextSceneId: 'dead_d1_griffin'
        },
        {
          label: '“Just trust me”',
          description:
            'You do not need to ask anyone — you can just tell everyone what needs to be done.',
          nextSceneId: 'dead_d1_trust'
        },
        {
          label: 'Evidence first',
          description:
            'Conduct a range of internal and external interviews, and validate your assumptions using data.',
          nextSceneId: 'd2_solgen'
        }
      ]
    },
    {
      id: 'dead_d1_griffin',
      title: 'Wrong turn',
      image: '/story/griffin.jpeg',
      allowBack: true,
      body: 'You pick bee farming instead of background checking. Hay fever was not in the business plan; the venture folds.',
      choices: []
    },
    {
      id: 'dead_d1_trust',
      title: 'Wrong turn',
      allowBack: true,
      body: 'You ship the one thing a noisy customer asked for. It does not work for the rest of HEC. Reviews tank and half the customer base walks.',
      choices: []
    },

    {
      id: 'd2_solgen',
      title: 'Decision 2 — Solution generation',
      body: 'The problem is clearer. How do we pick what to build?',
      choices: [
        {
          label: 'Copy a competitor',
          description: 'Lift their flow and tweak the colours.',
          nextSceneId: 'dead_d2_copy'
        },
        {
          label: 'Structured workshop',
          description:
            'Run a solution generation meeting with clear boundaries on the problem space. Vote on the best solution based on feasibility and impact.',
          nextSceneId: 'd3_scoping'
        },
        {
          label: 'Back to the Griffin',
          description: 'Have drinks until a good idea hits.',
          nextSceneId: 'dead_d2_griffin'
        }
      ]
    },
    {
      id: 'dead_d2_copy',
      title: 'Wrong turn',
      allowBack: true,
      body: 'You optimise for parity, not fit. The team burns time matching someone else’s roadmap instead of your customers’ reality.',
      choices: []
    },
    {
      id: 'dead_d2_griffin',
      title: 'Wrong turn',
      image: '/story/griffin.jpeg',
      allowBack: true,
      body: 'Ideas get louder; clarity does not. The backlog fills with bar-napkin commitments nobody can defend.',
      choices: []
    },

    {
      id: 'd3_scoping',
      title: 'Decision 3 — Scoping the work',
      body: 'We have about four weeks on the clock. What do we commit to?',
      choices: [
        {
          label: 'Tight UX plus flow work',
          description:
            'Minor improvements to the recruiter UX (one to two weeks) and a medium-sized overhaul of the candidate flow (two weeks).',
          nextSceneId: 'dead_d3_split'
        },
        {
          label: 'Focused impact',
          description:
            'Aim to solve a larger, impactful problem (two to three weeks).',
          nextSceneId: 'd4_kickoff'
        },
        {
          label: 'AI everything',
          description:
            'Create an AI chatbot that writes referee reports and flags issues from preferences — “four weeks tops”.',
          nextSceneId: 'dead_d3_ai'
        }
      ]
    },
    {
      id: 'dead_d3_split',
      title: 'Wrong turn',
      allowBack: true,
      body: 'You ship a haphazard “add character reference” button. Candidates add their mates; CS and AM drown. HEC customers revolt.',
      choices: []
    },
    {
      id: 'dead_d3_ai',
      title: 'Wrong turn',
      allowBack: true,
      body: 'The bot ships on time, then fails on messy employment histories and edge cases. Trust erodes faster than the demo impressed.',
      choices: []
    },

    {
      id: 'd4_kickoff',
      title: 'Decision 4 — Implementation kick-off',
      body: 'Build is about to start. How do we open the project?',
      choices: [
        {
          label: 'Planning with the whole team',
          description:
            'Gather the team for feature planning and get feedback from the whole team on potential problems and issues.',
          nextSceneId: 'd5_third_party'
        },
        {
          label: 'Straight to build',
          description:
            'There is never enough time — catch up on the way and start building immediately.',
          nextSceneId: 'dead_d4_rush'
        },
        {
          label: 'Griffin FYI',
          description: 'Give the other teams a heads-up over drinks so they are loosely in the loop.',
          nextSceneId: 'dead_d4_griffin'
        }
      ]
    },
    {
      id: 'dead_d4_rush',
      title: 'Wrong turn',
      allowBack: true,
      body: 'Surprises stack up in integration. You spend the sprint untangling assumptions that a single planning session would have surfaced.',
      choices: []
    },
    {
      id: 'dead_d4_griffin',
      title: 'Wrong turn',
      image: '/story/griffin.jpeg',
      allowBack: true,
      body: 'People remember the toast, not the scope. When things go wrong, nobody agrees what “in the loop” meant.',
      choices: []
    },

    {
      id: 'd5_third_party',
      title: 'Decision 5 — Third-party delay',
      body: 'A partner has not delivered their piece yet. What do we do?',
      choices: [
        {
          label: 'Pause and wait it out',
          description: 'Pause the feature and head to the Griffin until they are ready.',
          nextSceneId: 'dead_d5_pub'
        },
        {
          label: 'Bring it in-house, fast',
          description:
            'Drop the vendor and rebuild what they were meant to deliver — “just vibe code it, it is easy”.',
          nextSceneId: 'dead_d5_vibe'
        },
        {
          label: 'Partner properly',
          description:
            'Work collaboratively with the third party on a realistic plan. Keep following up, and if needed move people to other work while we wait.',
          nextSceneId: 'd6_testing'
        }
      ]
    },
    {
      id: 'dead_d5_pub',
      title: 'Wrong turn',
      image: '/story/griffin.jpeg',
      allowBack: true,
      body: 'The roadmap goes quiet while the pub stays loud. Stakeholders assume you have given up.',
      choices: []
    },
    {
      id: 'dead_d5_vibe',
      title: 'Wrong turn',
      allowBack: true,
      body: 'You inherit operational risk you did not price. Production incidents become your new stand-up.',
      choices: []
    },

    {
      id: 'd6_testing',
      title: 'Decision 6 — Testing',
      body: 'The feature has been tested, but how far do we go before we call it ready?',
      choices: [
        {
          label: 'Test in production',
          description: 'If something breaks, our users will tell us.',
          nextSceneId: 'dead_d6_prod'
        },
        {
          label: 'Plan plus automation',
          description:
            'Check user stories against the test plan manually, and build end-to-end tests that run before launch and on every change from here on.',
          nextSceneId: 'd7_cross_team'
        },
        {
          label: 'Defer quality',
          description: 'Merge now; we will add tests when things calm down.',
          nextSceneId: 'dead_d6_skip'
        }
      ]
    },
    {
      id: 'dead_d6_prod',
      title: 'Wrong turn',
      allowBack: true,
      body: 'The blast radius is real. You trade a quiet Friday for a loud weekend.',
      choices: []
    },
    {
      id: 'dead_d6_skip',
      title: 'Wrong turn',
      allowBack: true,
      body: 'Regression debt compounds. Every future change feels like guesswork.',
      choices: []
    },

    {
      id: 'd7_cross_team',
      title: 'Decision 7 — Cross-team review',
      body: 'Testing has gone well. What happens next?',
      choices: [
        {
          label: 'Ship and celebrate',
          description: 'Ship it and head to the Griffin.',
          nextSceneId: 'dead_d7_ship'
        },
        {
          label: 'Fresh eyes',
          description:
            'Ask someone outside our team to review the feature.',
          nextSceneId: 'd8_deploy'
        },
        {
          label: 'Run it all again',
          description: 'Test everything from scratch, indefinitely.',
          nextSceneId: 'dead_d7_loop'
        }
      ]
    },
    {
      id: 'dead_d7_ship',
      title: 'Wrong turn',
      image: '/story/griffin.jpeg',
      allowBack: true,
      body: 'A blind spot you could have caught with one review becomes everyone’s incident.',
      choices: []
    },
    {
      id: 'dead_d7_loop',
      title: 'Wrong turn',
      allowBack: true,
      body: 'Momentum dies in endless re-runs. The market does not wait for your twentieth full pass.',
      choices: []
    },

    {
      id: 'd8_deploy',
      title: 'Decision 8 — Deployment',
      body: 'After a hard week, the feature is ready to go live on Friday afternoon. What do we do?',
      choices: [
        {
          label: 'Ship and run',
          description: 'Ship it and head to the Griffin.',
          nextSceneId: 'dead_d8_griffin'
        },
        {
          label: 'Cover the launch',
          description:
            'Deploy the feature and ask that a few engineers stick around a bit longer in case anything goes wrong.',
          nextSceneId: 'dead_d8_friday'
        },
        {
          label: 'Wait for Monday',
          description:
            'Wait until Monday so we can monitor the release and roll back if there are any issues.',
          nextSceneId: 'd9_announce'
        }
      ]
    },
    {
      id: 'dead_d8_griffin',
      title: 'Wrong turn',
      image: '/story/griffin.jpeg',
      allowBack: true,
      body: 'The pager does not care about happy hour. You learn about the outage from customer posts.',
      choices: []
    },
    {
      id: 'dead_d8_friday',
      title: 'Wrong turn',
      allowBack: true,
      body: 'You stay online, but you still shipped into Friday peak with half the company offline. The incident runs longer than the rota.',
      choices: []
    },

    {
      id: 'd9_announce',
      title: 'Decision 9 — Release announcement',
      body: 'The feature is live. How do we tell the company?',
      choices: [
        {
          label: 'Griffin microphone',
          description: 'Get on the mic at the Griffin and announce the feature is live.',
          nextSceneId: 'dead_d9_mic'
        },
        {
          label: 'Structured comms',
          description:
            'Send a pre-release message to the company, then follow up with a notification and release notes when the feature goes live.',
          nextSceneId: 'd10_whats_next'
        },
        {
          label: 'Organic discovery',
          description: 'The feature is so good people will naturally find it and love it.',
          nextSceneId: 'dead_d9_hope'
        }
      ]
    },
    {
      id: 'dead_d9_mic',
      title: 'Wrong turn',
      image: '/story/griffin.jpeg',
      allowBack: true,
      body: 'Half the company hears a garbled toast; the other half hears nothing. Support still gets ambushed.',
      choices: []
    },
    {
      id: 'dead_d9_hope',
      title: 'Wrong turn',
      allowBack: true,
      body: 'Silence is not confidence. Adoption flatlines while everyone assumes someone else already knows.',
      choices: []
    },

    {
      id: 'd10_whats_next',
      title: 'Decision 10 — What is next?',
      body: 'The release landed. How does the team close the loop?',
      choices: [
        {
          label: 'Celebrate',
          description: 'Go for a celebratory drink at the Griffin — you have earned it.',
          nextSceneId: 'dead_d10_party'
        },
        {
          label: 'Immediately build more',
          description: 'Start the next feature right away.',
          nextSceneId: 'dead_d10_stack'
        },
        {
          label: 'Learn from reality',
          description:
            'Watch product analytics to see whether people use what we built and where they struggle.',
          nextSceneId: 'ending_win'
        }
      ]
    },
    {
      id: 'dead_d10_party',
      title: 'Wrong turn',
      image: '/story/griffin.jpeg',
      allowBack: true,
      body: 'The party was fun; the dashboards stayed dark. You celebrate a launch you never measure.',
      choices: []
    },
    {
      id: 'dead_d10_stack',
      title: 'Wrong turn',
      allowBack: true,
      body: 'The team never catches its breath. Quality slips on the next thing before this one proves its value.',
      choices: []
    },

    {
      id: 'ending_win',
      title: 'You kept the story honest',
      body: 'From problem discovery through deployment and comms, you picked the path that respects evidence, collaboration, and learning. That is how “Good Fit HEC” stops being a slide and starts being an experience.',
      choices: []
    }
  ]
}
