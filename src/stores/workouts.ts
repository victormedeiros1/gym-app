import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

import { DayId, Workout, WorkoutWeek } from '@/types/workout'
import { initialStateOfWorkouts } from '@/utils/workout'

export const useWorkoutsStore = defineStore('workouts', {
  state: () => ({
    workouts: initialStateOfWorkouts as WorkoutWeek
  }),
  actions: {
    addWorkout(dayId: DayId) {
      this.workouts[dayId].workouts.push({
        id: uuidv4(),
        name: '',
        series: 0,
        repetitions: 0
      })
    },
    removeWorkout(dayId: DayId, removedWorkoutId: string) {
      this.workouts[dayId].workouts = this.workouts[dayId].workouts.filter(
        (workout: Workout) => workout.id !== removedWorkoutId
      )
    }
  }
})
