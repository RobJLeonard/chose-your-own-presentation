# Choose your own adventure (Nuxt 3)

A minimal branching narrative presentation built with **Nuxt 3**, **Vue 3**, **TypeScript**, and **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:3000`).

## Build

```bash
npm run build
npm run preview
```

## Extend the story

1. Edit [`data/story.ts`](data/story.ts): add scenes to the `scenes` array and point `choices[].nextSceneId` at other scene `id`s.
2. Set `startSceneId` to the first scene you want readers to see.
3. Endings use `choices: []` — the UI shows **Play again** and calls `restart()` from [`composables/useStory.ts`](composables/useStory.ts).

Optional images live under `public/` (see `intro` scene `image` in `data/story.ts`).

## Project layout

| Path | Role |
|------|------|
| `data/story.ts` | Story content |
| `composables/useStory.ts` | Current scene, history, navigation |
| `components/StoryScene.vue` | Title, body, optional image |
| `components/ChoiceList.vue` | Choice buttons |
| `components/ProgressTrail.vue` | Path / history panel |
| `pages/index.vue` | Main experience |

## Licence

Private project — adjust as needed.
