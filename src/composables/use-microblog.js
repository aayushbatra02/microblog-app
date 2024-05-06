import { ref } from "vue";
import blogsData from "@/data/blogsData.json";

export function useMicroblog() {
  const blogs = ref(blogsData);
  const increaseLike = (id) => {
    const updatedBlogs = blogs.value.map((blog) => {
      if (blog.id === id) {
        blog.likes++;
      }
      return blog;
    });
    blogs.value = updatedBlogs;
  };

  const filterBlogs = (hashtagInput) => {
    if (hashtagInput !== "") {
      const updatedBlogs = blogsData.filter((blog) => {
        const tagsArray = blog.tags.map((tag) => tag.toLowerCase());
        return tagsArray.includes(hashtagInput.toLowerCase());
      });
      blogs.value = updatedBlogs;
    } else {
      blogs.value = blogsData;
    }
  };

  return { blogs, increaseLike, filterBlogs };
}
