import { defineStore } from 'pinia'

import { Workout } from '@/types/workout'

const useWorkoutsStore = defineStore('workout', {
  state: () => ({
    workouts: [] as Workout[]
  }),
  actions: {
    addWorkout(workout: Workout) {
      this.$state.workouts.push(workout)
    }
  }
})
