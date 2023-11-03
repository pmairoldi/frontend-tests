<script setup lang="ts">
defineProps<{ direction?: "asc" | "desc" }>();

// import { PropType } from "vue";

// defineProps({
//   direction: {
//     type: String as PropType<"asc" | "desc">,
//     validator(value: string) {
//       return ["asc", "desc"].includes(value);
//     },
//   },
// });
</script>

<template>
  <div>
    <h1>Hello {{ direction }}!</h1>
    <p>Start editing to see some magic happen :)</p>
  </div>
</template>
