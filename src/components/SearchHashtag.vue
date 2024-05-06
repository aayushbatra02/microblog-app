<template>
  <div class="flex items-end">
    <label for="search">Search Hashtag: #</label>
    <input
      v-model.trim="hashtagInput"
      class="px-2 pt-2 mx-2 border-b border-black w-[8rem] lg:w-[15rem]"
      type="text"
    />
  </div>
</template>

<script setup>
import { watch, defineEmits, ref, defineProps, watchEffect } from "vue";

const hashtagInput = ref("");
const emit = defineEmits(["filterBlogs", "updateSearchText"]);
const props = defineProps(["clickedHashTag"]);
watch(hashtagInput, () => {
  emit("filterBlogs", hashtagInput.value);
});

watchEffect(() => {
  hashtagInput.value = props.clickedHashTag;
});
</script>

