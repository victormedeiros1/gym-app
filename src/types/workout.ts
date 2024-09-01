export interface Workout {
  id: string
  name: string
  series: number
  repetitions: number
}

export type DayId = keyof WorkoutWeek
export interface Day {
  id: DayId
  name: string
  workouts: Workout[]
}

export interface WorkoutWeek {
  monday: Day
  tuesday: Day
  wednesday: Day
  thursday: Day
  friday: Day
  saturday: Day
  sunday: Day
}
