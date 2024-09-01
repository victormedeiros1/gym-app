<template>
  <div class="day">
    <div class="dropdown">
      <button class="dropdown__header" @click="toggleExpandDropdown">
        <h2 class="dropdown__label">{{ name }}</h2>
        <span>
          <i
            class="dropdown__arrow pi pi-angle-down"
            :class="isExpanded ? 'rotate-180' : 'rotate-0'"
          ></i>
        </span>
      </button>
    </div>

    <div
      class="dropdown__body"
      :class="isExpanded ? 'expanded' : 'not-expanded'"
    >
      <Workout />

      <div class="dropdown__footer">
        <button class="dropdown__submit">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Workout from '@/components/Workout/Workout.vue'

  import { ref } from 'vue'

  interface Props {
    name: string
  }

  defineProps<Props>()

  const isExpanded = ref<boolean>(false)

  const toggleExpandDropdown = (): void => {
    isExpanded.value = !isExpanded.value
  }
</script>

<style lang="scss" scoped>
  .day {
    background-color: $gray-100;
    box-shadow: 0 0 10px $gray-300;

    .dropdown {
      &__header {
        width: 100%;
        background-color: $gray-100;
        border: none;
        color: $gray-800;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $p-16;

        &:hover {
          background-color: $gray-200;
        }
      }

      &__body {
        overflow: hidden;
        padding: 0 $p-16;
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

    .expanded {
      transition: 200ms;
      height: 300px;
    }

    .not-expanded {
      transition: 200ms;
      height: 0;
    }
  }
</style>
