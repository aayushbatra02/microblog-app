<template>
  <div class="p-4 w-[20rem] md:w-[43rem] lg:w-[70rem] m-auto">
    <SearchHashtag
      @filterBlogs="filterBlogs"
      :clickedHashTag="clickedHashTag"
    />
    <div class="flex flex-wrap justify-right gap-4 mt-4">
      <BlogCard
        :blog="blog"
        v-for="blog in blogs"
        :key="blog.id"
        @handleHashtagClick="handleHashtagClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlogCard from "./components/BlogCard.vue";
import SearchHashtag from "./components/SearchHashtag.vue";
import { useMicroblog } from "./composables/use-microblog";

const { blogs, filterBlogs } = useMicroblog();
const clickedHashTag = ref("");

const handleHashtagClick = (hashtag) => {
  clickedHashTag.value = hashtag;
};

</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>