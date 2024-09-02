import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { DayId, Workout, WorkoutWeek } from '@/types/workout'
import { workoutsInitialState } from '@/utils/workout'

export const useWorkoutsStore = defineStore('workouts', {
  state: () => {
    const storedWorkouts = localStorage.getItem('workouts')

    return {
      workouts: storedWorkouts
        ? (JSON.parse(storedWorkouts) as WorkoutWeek)
        : workoutsInitialState
    }
  },
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
