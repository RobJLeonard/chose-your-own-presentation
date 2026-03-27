<script setup lang="ts">
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'

const props = defineProps<{
  /** May be a bare array or a ref/computed from the parent (plain objects do not unwrap nested refs). */
  history: MaybeRefOrGetter<string[]>
  currentSceneId: MaybeRefOrGetter<string>
  getSceneTitle: (sceneId: string) => string
}>()

/** Ordered steps: prior visits, then the current scene. */
const steps = computed(() => {
  const prior = toValue(props.history)
  const current = toValue(props.currentSceneId)
  return [...prior, current]
})
</script>

<template>
  <div class="w-full">
    <p class="mb-2 text-xs font-medium uppercase tracking-wide text-slate-500">
      Your path
    </p>
    <div
      class="flex max-w-full gap-2 overflow-x-auto pb-1 text-sm text-slate-300 sm:text-base"
      role="navigation"
      aria-label="Story progress"
    >
      <template
        v-for="(sceneId, index) in steps"
        :key="`${sceneId}-${index}`"
      >
        <span
          v-if="index > 0"
          class="shrink-0 text-slate-600"
          aria-hidden="true"
        >
          /
        </span>
        <span
          class="shrink-0 whitespace-nowrap rounded-full bg-slate-800/80 px-3 py-1 ring-1 ring-slate-700/80"
          :class="index === steps.length - 1 ? 'text-emerald-300 ring-emerald-500/40' : ''"
        >
          {{ getSceneTitle(sceneId) }}
        </span>
      </template>
    </div>
  </div>
</template>
