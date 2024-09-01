import { defineStore } from 'pinia'

import { DayId, Workout, WorkoutWeek } from '@/types/workout'
import { initialStateOfWorkouts } from '@/utils/workout'

export const useWorkoutsStore = defineStore('workouts', {
  state: () => ({
    workouts: initialStateOfWorkouts as WorkoutWeek
  }),
  actions: {
    removeWorkout(dayId: DayId, removedWorkoutId: number) {
      this.workouts[dayId].workouts = this.workouts[dayId].workouts.filter(
        (workout: Workout) => workout.id !== removedWorkoutId
      )
    }
  }
})
