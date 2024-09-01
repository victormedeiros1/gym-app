<template>
  <Container>
    <div class="days">
      <Day name="Segunda-feira" />
      <Day name="Terça-feira" />
      <Day name="Quarta-feira" />
      <Day name="Quinta-feira" />
      <Day name="Sexta-feira" />
    </div>
  </Container>
</template>

<script setup lang="ts">
  import Container from '@/components/Container/Container.vue'
  import Day from '@/components/Day/Day.vue'
</script>

<style scoped lang="scss">
  .days {
    display: flex;
    flex-direction: column;
    gap: $p-16;
  }
</style>
