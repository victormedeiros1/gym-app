import { Day } from '@/types/workout'

export const initialStateOfWorkouts: Day[] = [
  {
    id: 0,
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
  {
    id: 1,
    name: 'Terça-feira',
    workouts: []
  },
  {
    id: 2,
    name: 'Quarta-feira',
    workouts: []
  },
  {
    id: 3,
    name: 'Quinta-feira',
    workouts: []
  },
  {
    id: 4,
    name: 'Sexta-feira',
    workouts: []
  },
  {
    id: 5,
    name: 'Sábado',
    workouts: []
  },
  {
    id: 6,
    name: 'Domingo',
    workouts: []
  }
]
