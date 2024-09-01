<template>
  <Container>
    <div class="days">
      <div v-for="day in days" :key="day.id">
        <Day :name="day.name" />
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
  import Container from '@/components/Container/Container.vue'
  import Day from './components/Day/Day.vue'
  import { ref } from 'vue'

  interface Days {
    id: number
    name: string
  }

  const days = ref<Days[]>([
    {
      id: 1,
      name: 'Segunda'
    }
  ])
</script>

<style scoped lang="scss">
  .days {
    display: flex;
    flex-direction: column;
    gap: $p-16;
  }
</style>
