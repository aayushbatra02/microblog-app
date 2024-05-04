import { onMounted, ref } from "vue";
import blogsData from "@/data/blogsData.json";

export function useMicroblog() {
  const blogs = ref(blogsData);
  onMounted(() => {
    console.log(blogs.value);
  });
  return { blogs };
}
