<script setup lang="ts">
import type { Choice } from '~/types/story'

defineProps<{
  choices: Choice[]
}>()

const emit = defineEmits<{
  choose: [nextSceneId: string]
}>()

function onChoose(nextSceneId: string) {
  emit('choose', nextSceneId)
}
</script>

<template>
  <div class="grid gap-3 sm:grid-cols-1 sm:gap-4">
    <button
      v-for="(choice, index) in choices"
      :key="`${choice.nextSceneId}-${index}`"
      type="button"
      class="group flex w-full flex-col items-start rounded-xl border border-slate-700/90 bg-slate-900/50 px-5 py-4 text-left text-slate-100 shadow-sm transition hover:border-emerald-500/60 hover:bg-slate-800/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      @click="onChoose(choice.nextSceneId)"
    >
      <span class="text-lg font-medium text-slate-50 sm:text-xl">
        {{ choice.label }}
      </span>
      <span
        v-if="choice.description"
        class="mt-1 text-sm text-slate-400 sm:text-base"
      >
        {{ choice.description }}
      </span>
    </button>
  </div>
</template>
