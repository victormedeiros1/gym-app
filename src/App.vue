<template>
  <Container>
    <div class="week-of-workout">
      <Day v-for="day in workouts" :key="day.id" :day="day" />
    </div>
  </Container>
</template>

<script setup lang="ts">
  import Container from '@/components/Container/Container.vue'
  import Day from './components/Day/Day.vue'

  import { useWorkoutsStore } from '@/stores/workouts'
  import { storeToRefs } from 'pinia'

  const { workouts } = storeToRefs(useWorkoutsStore())
</script>

<style scoped lang="scss">
  .week-of-workout {
    display: flex;
    flex-direction: column;
    gap: $p-16;
  }
</style>
