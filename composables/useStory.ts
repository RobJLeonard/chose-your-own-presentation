import { story as storyData } from '~/data/story'
import type { Scene, Story } from '~/types/story'

/** Shared story session state (single module instance in the browser). */
const story: Story = storyData

const sceneMap = new Map(story.scenes.map((s) => [s.id, s]))

const currentSceneId = ref(story.startSceneId)
/** Scene IDs already visited before the current one (path excluding current). */
const pastSceneIds = ref<string[]>([])

export function useStory() {
  const currentScene = computed<Scene | undefined>(() => sceneMap.get(currentSceneId.value))

  /** Visited scene IDs before the current scene (safe for SSR and templates). */
  const history = computed(() => pastSceneIds.value)

  const isEnd = computed(() => {
    const scene = currentScene.value
    return !!scene && scene.choices.length === 0
  })

  const canGoBack = computed(
    () => !!currentScene.value?.allowBack && pastSceneIds.value.length > 0
  )

  /** Full path from start to now, including the current scene ID. */
  const pathSceneIds = computed(() => [...pastSceneIds.value, currentSceneId.value])

  function chooseOption(nextSceneId: string) {
    if (!sceneMap.has(nextSceneId)) {
      if (import.meta.dev) {
        console.warn(`[useStory] Unknown scene "${nextSceneId}".`)
      }
      return
    }
    pastSceneIds.value = [...pastSceneIds.value, currentSceneId.value]
    currentSceneId.value = nextSceneId
  }

  function restart() {
    currentSceneId.value = story.startSceneId
    pastSceneIds.value = []
  }

  /** Return to the scene you were on before this terminal (e.g. wrong-turn) scene. */
  function goBack() {
    const prev = pastSceneIds.value.pop()
    if (prev === undefined) {
      return
    }
    currentSceneId.value = prev
  }

  function getSceneTitle(sceneId: string): string {
    return sceneMap.get(sceneId)?.title ?? sceneId
  }

  /**
   * Wrap in `reactive` so nested refs/computeds unwrap when accessed as
   * `storyState.isEnd` (plain objects do not auto-unwrap nested refs in templates).
   */
  return reactive({
    storyTitle: computed(() => story.title),
    currentScene,
    currentSceneId: readonly(currentSceneId),
    history,
    pathSceneIds,
    isEnd,
    canGoBack,
    chooseOption,
    restart,
    goBack,
    getSceneTitle
  })
}
