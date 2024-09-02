<template>
  <div class="workout-form">
    <div class="workout-form__group">
      <input
        class="workout-form__input workout-form__input--name"
        v-model="workout.name"
      />
      <input
        class="workout-form__input workout-form__input--series"
        v-model="workout.series"
      />
      <input
        class="workout-form__input workout-form__input--repetitions"
        v-model="workout.repetitions"
      />

      <button @click="removeWorkout(dayId, workout.id)">
        <i class="pi pi-trash"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { DayId, Workout, WorkoutWeek } from '@/types/workout'

  import { workoutInitialState } from '@/utils/workout'
  import { useWorkoutsStore } from '@/stores/workouts'

  import { onMounted, ref } from 'vue'
  import { storeToRefs } from 'pinia'
  import { watch } from 'vue'

  interface Props {
    dayId: DayId
    workoutId: string
  }

  const { removeWorkout } = useWorkoutsStore()

  const props = defineProps<Props>()

  const { workouts } = storeToRefs(useWorkoutsStore())

  const workout = ref<Workout>(workoutInitialState)

  const fetchWorkout = (
    workouts: WorkoutWeek,
    dayId: DayId,
    workoutId: string
  ): void => {
    workout.value =
      workouts[dayId].workouts.find(
        (workout: Workout) => workout.id === workoutId
      ) ?? workoutInitialState
  }

  onMounted(() => {
    fetchWorkout(workouts.value, props.dayId, props.workoutId)
  })

  watch(workouts.value, () => {
    localStorage.setItem('workouts', JSON.stringify(workouts.value))
  })
</script>

<style scoped lang="scss">
  .workout-form {
    display: flex;
    flex-direction: column;
    gap: $g-16;

    &__group {
      display: flex;
      gap: $g-16;
    }

    &__input {
      text-align: center;
      height: 32px;

      &--name {
        width: 100%;
      }

      &--series,
      &--repetitions {
        width: 50px;
      }
    }
  }
</style>
