<script setup lang="ts">
/** Keep the composable object intact so refs stay reactive (avoid destructuring refs). */
const storyState = useStory()
</script>

<template>
  <div class="mx-auto flex min-h-dvh max-w-2xl flex-col px-4 py-8 sm:px-6 sm:py-12">
    <header class="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
      <div>
        <p class="text-sm font-medium uppercase tracking-wide text-slate-500">
          Interactive story
        </p>
        <h1 class="text-2xl font-semibold text-slate-50 sm:text-3xl">
          {{ storyState.storyTitle }}
        </h1>
      </div>
      <button
        type="button"
        class="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        @click="storyState.restart"
      >
        Restart
      </button>
    </header>

    <ProgressTrail
      :history="storyState.history"
      :current-scene-id="storyState.currentSceneId"
      :get-scene-title="storyState.getSceneTitle"
      class="mb-10"
    />

    <main class="flex flex-1 flex-col">
      <Transition
        name="scene"
        mode="out-in"
      >
        <div
          v-if="storyState.currentScene"
          :key="storyState.currentScene.id"
          class="flex flex-1 flex-col"
        >
          <StoryScene :scene="storyState.currentScene" />

          <div class="mt-10 space-y-6">
            <ChoiceList
              v-if="!storyState.isEnd"
              :choices="storyState.currentScene.choices"
              @choose="storyState.chooseOption"
            />
            <div
              v-else-if="storyState.canGoBack"
              class="flex flex-col gap-4 rounded-xl border border-amber-500/30 bg-amber-950/25 px-6 py-5 text-amber-50 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <button
                type="button"
                class="rounded-lg border border-amber-500/60 bg-amber-900/40 px-5 py-3 font-medium text-amber-50 transition hover:border-amber-400 hover:bg-amber-900/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                @click="storyState.goBack"
              >
                Go back to the last decision
              </button>
              <button
                type="button"
                class="rounded-lg border border-slate-600 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                @click="storyState.restart"
              >
                Start over
              </button>
            </div>
            <div
              v-else
              class="rounded-xl border border-emerald-500/30 bg-emerald-950/30 px-6 py-5 text-emerald-50"
            >
              <p class="mb-4 text-lg">
                The end — for now.
              </p>
              <button
                type="button"
                class="rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-900/40 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                @click="storyState.restart"
              >
                Play again
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </main>

    <footer class="mt-auto pt-12 text-center text-sm text-slate-500">
      Choose a path to continue. No reloads — just Vue.
    </footer>
  </div>
</template>

<style scoped>
.scene-enter-active,
.scene-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}
.scene-enter-from,
.scene-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
