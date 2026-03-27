<script setup lang="ts">
import type { Scene } from '~/types/story'

defineProps<{
  scene: Scene
}>()
</script>

<template>
  <article class="space-y-6 text-slate-100">
    <header class="space-y-2">
      <h1 class="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
        {{ scene.title }}
      </h1>
    </header>
    <div
      v-if="scene.image"
      class="overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/40 shadow-lg shadow-slate-950/40"
    >
      <img
        :src="scene.image"
        :alt="`Illustration for ${scene.title}`"
        class="h-auto w-full object-cover"
        width="800"
        height="400"
        loading="lazy"
      />
    </div>
    <p class="text-xl leading-relaxed text-slate-200 sm:text-2xl">
      {{ scene.body }}
    </p>
  </article>
</template>
