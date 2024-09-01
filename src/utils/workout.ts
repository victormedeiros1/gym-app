import { WorkoutWeek } from '@/types/workout'

export const initialStateOfWorkouts: WorkoutWeek = {
  monday: {
    id: 'monday',
    name: 'Segunda-feira',
    workouts: [
      {
        id: 0,
        name: 'Pushups',
        series: 3,
        repetitions: 10
      },
      {
        id: 1,
        name: 'Squats',
        series: 3,
        repetitions: 10
      }
    ]
  },
  tuesday: {
    id: 'tuesday',
    name: 'Terça-feira',
    workouts: []
  },
  wednesday: {
    id: 'wednesday',
    name: 'Quarta-feira',
    workouts: []
  },
  thursday: {
    id: 'thursday',
    name: 'Quinta-feira',
    workouts: []
  },
  friday: {
    id: 'friday',
    name: 'Sexta-feira',
    workouts: []
  },
  saturday: {
    id: 'saturday',
    name: 'Sábado',
    workouts: []
  },
  sunday: {
    id: 'sunday',
    name: 'Domingo',
    workouts: []
  }
}
