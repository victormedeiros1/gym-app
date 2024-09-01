<template>
  <div class="container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .container {
    background-color: $gray-200;
    box-shadow: 0 0 30px $gray-400;
    position: relative;
    width: 100%;
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    padding: $p-64;
    padding-top: $p-112;

    @media (width <= $sm) {
      min-height: 100svh;
      padding: $p-20;
      padding-top: $p-96;
    }
  }
</style>
