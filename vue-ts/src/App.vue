<script setup lang="ts">
import Sorting from "./components/Sorting.vue";
</script>

<template>
  <Sorting />
  <!-- should be error -->
  <Sorting sorting="asc" />

  <Sorting direction="asc" />

  <Sorting direction="asc1" />

  <!-- should be error -->
  <Sorting :sorting="'asc'" />

  <Sorting :direction="'asc'" />

  <Sorting :direction="'asc1'" />

  <!-- should be error -->
  <Soritng />
</template>
