export interface Workout {
  id: number
  name: string
  series: number
  repetitions: number
}

export interface WorkoutWeek {
  monday: Workout[]
  tuesday: Workout[]
  wednesday: Workout[]
  thursday: Workout[]
  friday: Workout[]
  saturday: Workout[]
  sunday: Workout[]
}
