<template>
  <div class="exercise">
    <div class="exercise__group">
      <input class="exercise__input exercise__input--name" />
      <input class="exercise__input exercise__input--series" />
      <input class="exercise__input exercise__input--repetitions" />
    </div>

    <div class="exercuse__footer">
      <button class="exercise__submit">Adicionar</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .exercise {
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

    &__footer {
      margin-top: 16px;
    }

    &__submit {
      width: 100%;
      color: $gray-100;
      border: none;
      cursor: pointer;
      background-color: $gray-800;
      padding: $p-8;

      &:hover {
        background-color: $gray-900;
      }
    }
  }
</style>
