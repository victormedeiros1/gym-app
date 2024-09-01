<template>
  <div class="day">
    <h1>{{ name }}</h1>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    name: string
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped></style>
