<template>
  <div
    class="border border-gray-400 rounded-lg w-[20rem] lg:w-[23%] flex flex-col items-center gap-4 shadow-lg shadow-gray-400"
  >
    <h3 class="border-b border-gray-400 w-full text-center p-4 lg:h-[6rem]">
      {{ blog.title }}
    </h3>
    <p class="border-b border-gray-400 p-4 text-center lg:h-[10rem]">
      {{ blog.description }}
    </p>
    <div class="pb-4">
      <div class="flex justify-center items-center my-2 gap-2">
        <Icon
          @click="increaseLike(blog.id)"
          icon="mdi:heart"
          class="text-red-500 cursor-pointer w-6 h-6"
        />
        {{ blog.likes }}
      </div>
      <card-hashtags
        :hashTags="blog.tags"
        @handle-tag-click="handleTagClick"
      ></card-hashtags>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { Icon } from "@iconify/vue";

import CardHashtags from "./CardHashtags.vue";
import { useMicroblog } from "@/composables/use-microblog";

defineProps(["blog"]);
const emit = defineEmits(["handleHashtagClick"]);
const handleTagClick = (tag) => {
  emit("handleHashtagClick", tag);
};
const { increaseLike } = useMicroblog();
</script>
