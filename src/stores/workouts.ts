import { defineStore } from 'pinia'

import { Day } from '@/types/workout'
import { initialStateOfWorkouts } from '@/utils/workout'

export const useWorkoutsStore = defineStore('workout', {
  state: () => ({
    workouts: initialStateOfWorkouts as Day[]
  })
})
