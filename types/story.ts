/** Core types for branching narrative content. */

export interface Choice {
  label: string
  nextSceneId: string
  /** Optional extra context shown on the choice card. */
  description?: string
}

export interface Scene {
  id: string
  title: string
  body: string
  /** Public URL path (e.g. `/story/forest.svg`). */
  image?: string
  /** Empty array denotes an ending scene. */
  choices: Choice[]
}

export interface Story {
  title: string
  startSceneId: string
  scenes: Scene[]
}
