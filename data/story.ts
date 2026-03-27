import type { Story } from '~/types/story'

export const story: Story = {
  title: 'From Problem to Launch',
  startSceneId: 'intro',
  scenes: [
    {
      id: 'intro',
      title: 'A new opportunity appears',
      body: 'A customer problem has surfaced and the team believes there may be a valuable feature to build. The journey begins with understanding the problem space properly.',
      choices: [
        {
          label: 'Explore the problem space properly',
          description: 'Use evidence, research, and signals to understand the real issue.',
          nextSceneId: 'problem_good'
        },
        {
          label: 'Jump straight to a solution idea',
          description: 'Move quickly, but risk solving the wrong problem.',
          nextSceneId: 'problem_bad'
        }
      ]
    },

    {
      id: 'problem_good',
      title: 'Problem space identified well',
      body: 'The team looks at data, user feedback, and internal insight. A clear problem statement starts to emerge, giving everyone a shared understanding of what needs to be solved.',
      choices: [
        {
          label: 'Scope the project with clear outcomes',
          description: 'Define goals, boundaries, and success measures.',
          nextSceneId: 'scope_good'
        },
        {
          label: 'Keep scope broad and flexible',
          description: 'Stay open-ended, but risk confusion and drift.',
          nextSceneId: 'scope_bad'
        }
      ]
    },
    {
      id: 'problem_bad',
      title: 'A solution without a clear problem',
      body: 'The team rallies around an idea before validating the real issue. Momentum feels good, but assumptions start replacing evidence, making later decisions fragile.',
      choices: [
        {
          label: 'Pause and reframe the project properly',
          description: 'Step back and return to structured scoping.',
          nextSceneId: 'scope_good'
        },
        {
          label: 'Keep pushing forward anyway',
          description: 'Continue with uncertainty and hope it works out.',
          nextSceneId: 'scope_bad'
        }
      ]
    },

    {
      id: 'scope_good',
      title: 'Well-scoped initiative',
      body: 'The team defines what success looks like, what is out of scope, and what constraints matter. There is enough clarity to make smart design decisions without overcommitting.',
      choices: [
        {
          label: 'Design with validation and collaboration',
          description: 'Use lightweight design, shared thinking, and feedback.',
          nextSceneId: 'design_good'
        },
        {
          label: 'Design in isolation',
          description: 'Move fast visually, but risk disconnect from users and team context.',
          nextSceneId: 'design_bad'
        }
      ]
    },
    {
      id: 'scope_bad',
      title: 'Scope starts to drift',
      body: 'The project is framed loosely: people use different definitions of success, new ideas keep getting added, and the team struggles to align around what should actually be built.',
      choices: [
        {
          label: 'Tighten the scope before moving on',
          description: 'Regain focus and create a strong design brief.',
          nextSceneId: 'design_good'
        },
        {
          label: 'Let design absorb the ambiguity',
          description: 'Hope the design phase will sort everything out.',
          nextSceneId: 'design_bad'
        }
      ]
    },

    {
      id: 'design_good',
      title: 'Design with intent',
      body: 'Design explores the solution space with clear tradeoffs in mind. Flows are reviewed early, assumptions are challenged, and the team builds confidence in the approach before planning begins.',
      choices: [
        {
          label: 'Plan in milestones with clear ownership',
          description: 'Break delivery into manageable steps.',
          nextSceneId: 'planning_good'
        },
        {
          label: 'Create one large delivery plan',
          description: 'Aim for one big push, but hide risks until late.',
          nextSceneId: 'planning_bad'
        }
      ]
    },
    {
      id: 'design_bad',
      title: 'Design drifts off course',
      body: 'The design work looks polished, but key assumptions were never tested. Important questions about feasibility, priority, and user value remain unresolved as the team heads into planning.',
      choices: [
        {
          label: 'Rework the plan around smaller validated steps',
          description: 'Reduce risk before development begins.',
          nextSceneId: 'planning_good'
        },
        {
          label: 'Plan around the full unvalidated vision',
          description: 'Commit to a path with a lot of hidden uncertainty.',
          nextSceneId: 'planning_bad'
        }
      ]
    },

    {
      id: 'planning_good',
      title: 'Thoughtful planning',
      body: 'The work is broken into milestones, responsibilities are clear, and dependencies are visible. The team knows what they are doing first, what can wait, and how progress will be tracked.',
      choices: [
        {
          label: 'Develop iteratively with regular check-ins',
          description: 'Build in loops with design, product, and QA.',
          nextSceneId: 'development_good'
        },
        {
          label: 'Build in isolation until it is “done”',
          description: 'Reduce interruptions, but risk late surprises.',
          nextSceneId: 'development_bad'
        }
      ]
    },
    {
      id: 'planning_bad',
      title: 'Planning without control',
      body: 'The plan is heavy, optimistic, and hard to adapt. Unknowns are buried inside large workstreams, and the team has little room to adjust once delivery starts.',
      choices: [
        {
          label: 'Reset to an iterative delivery approach',
          description: 'Simplify execution and create faster feedback loops.',
          nextSceneId: 'development_good'
        },
        {
          label: 'Push through the big-bang plan',
          description: 'Hope the unknowns do not become blockers.',
          nextSceneId: 'development_bad'
        }
      ]
    },

    {
      id: 'development_good',
      title: 'Healthy development flow',
      body: 'Development happens in small increments. Questions get resolved early, feedback comes in continuously, and the feature evolves with fewer surprises and better alignment.',
      choices: [
        {
          label: 'Test continuously throughout development',
          description: 'Catch issues early and validate the feature in realistic scenarios.',
          nextSceneId: 'testing_good'
        },
        {
          label: 'Leave testing until the end',
          description: 'Save time now, but compress quality later.',
          nextSceneId: 'testing_bad'
        }
      ]
    },
    {
      id: 'development_bad',
      title: 'Late-stage surprises',
      body: 'Development continues for a while without much shared visibility. When the feature is finally reviewed, gaps appear in edge cases, UX details, and readiness expectations.',
      choices: [
        {
          label: 'Introduce structured testing and recovery',
          description: 'Stabilise the work before release preparation.',
          nextSceneId: 'testing_good'
        },
        {
          label: 'Rush to finish and hope for the best',
          description: 'Carry quality risk into the next stage.',
          nextSceneId: 'testing_bad'
        }
      ]
    },

    {
      id: 'testing_good',
      title: 'Testing builds confidence',
      body: 'The feature is tested in realistic workflows, bugs are resolved before they multiply, and the team becomes more confident that the experience will hold up once released.',
      choices: [
        {
          label: 'Run a clear enablement session',
          description: 'Prepare internal teams to understand and support the feature.',
          nextSceneId: 'enablement_good'
        },
        {
          label: 'Skip or rush internal enablement',
          description: 'Assume everyone will figure it out later.',
          nextSceneId: 'enablement_bad'
        }
      ]
    },
    {
      id: 'testing_bad',
      title: 'Quality pressure builds',
      body: 'Testing uncovers issues late, and the team is now balancing bug fixing, release pressure, and internal expectations all at once. Confidence is lower than it should be.',
      choices: [
        {
          label: 'Slow down and align the business properly',
          description: 'Use enablement to reduce confusion before launch.',
          nextSceneId: 'enablement_good'
        },
        {
          label: 'Move on without proper preparation',
          description: 'Carry avoidable confusion into release.',
          nextSceneId: 'enablement_bad'
        }
      ]
    },

    {
      id: 'enablement_good',
      title: 'Teams are enabled',
      body: 'Product, support, sales, and other stakeholders understand what is changing, why it matters, and how to talk about it. Internal confidence starts to match delivery confidence.',
      choices: [
        {
          label: 'Release in a controlled way',
          description: 'Use flags, monitoring, and a measured rollout.',
          nextSceneId: 'release_good'
        },
        {
          label: 'Release everything at once',
          description: 'Go wide immediately and accept higher risk.',
          nextSceneId: 'release_bad'
        }
      ]
    },
    {
      id: 'enablement_bad',
      title: 'Internal confusion',
      body: 'The feature may be nearly ready, but the people around it are not. Questions arise about positioning, support, rollout expectations, and what success should look like after launch.',
      choices: [
        {
          label: 'Take a more deliberate release path',
          description: 'Reduce launch risk with a controlled rollout.',
          nextSceneId: 'release_good'
        },
        {
          label: 'Ship broadly despite the gaps',
          description: 'Hope adoption and understanding catch up later.',
          nextSceneId: 'release_bad'
        }
      ]
    },

    {
      id: 'release_good',
      title: 'Controlled release',
      body: 'The feature is released gradually with monitoring in place. Early signals are watched closely, issues can be corrected quickly, and the team learns as adoption grows.',
      choices: [
        {
          label: 'Announce with clear value and audience targeting',
          description: 'Make sure the launch message matches the feature impact.',
          nextSceneId: 'announcement_good'
        },
        {
          label: 'Send a rushed generic announcement',
          description: 'Technically launched, but easy to miss or misunderstand.',
          nextSceneId: 'announcement_bad'
        }
      ]
    },
    {
      id: 'release_bad',
      title: 'A risky launch',
      body: 'The feature lands everywhere at once. Any hidden issue now has maximum visibility, and internal teams are forced to react quickly under pressure.',
      choices: [
        {
          label: 'Recover with a thoughtful announcement',
          description: 'At least make the message clear and useful.',
          nextSceneId: 'announcement_good'
        },
        {
          label: 'Announce quickly and move on',
          description: 'Treat launch comms as a box to tick.',
          nextSceneId: 'announcement_bad'
        }
      ]
    },

    {
      id: 'announcement_good',
      title: 'A strong launch story',
      body: 'The feature is announced with clear messaging, the right audience context, and a strong explanation of value. Adoption starts with understanding, and the journey from problem to launch feels intentional.',
      choices: []
    },
    {
      id: 'announcement_bad',
      title: 'The feature lands quietly',
      body: 'The work shipped, but the message did not. The audience receives a vague or rushed announcement, adoption is slower than expected, and the impact of the feature is harder to realise.',
      choices: []
    }
  ]
}
