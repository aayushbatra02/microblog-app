<template>
  <div>
    <div class="font-bold text-4xl">Hello world</div>
  </div>
</template>

<script setup>
import { useMicroblog } from "./composables/use-microblog";
const { blogs } = useMicroblog();
console.log(blogs);
</script>