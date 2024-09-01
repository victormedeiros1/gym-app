<template>
  <div class="workout">
    <div class="workout__group">
      <input class="workout__input workout__input--name" />
      <input class="workout__input workout__input--series" />
      <input class="workout__input workout__input--repetitions" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .workout {
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
