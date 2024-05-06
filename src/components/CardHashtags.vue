<template>
  <div class="flex flex-col items-center">
    <div
      @click="$emit('handleTagClick', tag)"
      v-for="(tag, id) in hashTags"
      :key="id"
      class="border-b border-black leading-4 mb-4 cursor-pointer"
    >
      #{{ tag }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["hashTags"]);
defineEmits(["handleTagClick"]);
</script>