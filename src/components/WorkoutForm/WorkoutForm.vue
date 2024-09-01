<template>
  <div class="workout-form">
    <div class="workout-form__group">
      <input
        class="workout-form__input workout-form__input--name"
        v-model="dataOfWorkout.name"
      />
      <input
        class="workout-form__input workout-form__input--series"
        v-model="dataOfWorkout.series"
      />
      <input
        class="workout-form__input workout-form__input--repetitions"
        v-model="dataOfWorkout.repetitions"
      />

      <button @click="removeWorkout(dayId, workout.id)">
        <i class="pi pi-trash"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { DayId, Workout } from '@/types/workout'

  import { useWorkoutsStore } from '@/stores/workouts'

  import { ref } from 'vue'

  interface Props {
    dayId: DayId
    workout: Workout
  }

  const { removeWorkout } = useWorkoutsStore()

  const props = defineProps<Props>()

  const dataOfWorkout = ref<Workout>(props.workout)
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
