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
    </div>
  </div>
</template>
v-model=""

<script setup lang="ts">
  import { Workout } from '@/types/workout'

  import { ref } from 'vue'

  interface Props {
    workout: Workout
  }

  const props = defineProps<Props>()

  const dataOfWorkout = ref<Workout>(props.workout)
  console.log(dataOfWorkout.value)
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
