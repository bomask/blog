<!--
 * @Author: your name
 * @Date: 2021-01-05 18:39:46
 * @LastEditTime: 2021-01-12 10:59:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\components\common\BlogDetail.vue
-->
<template>
  <!-- 参考这个博客实现  https://overreacted.io/-->

  <div class="blogDetail" v-cloak>
    <div class="blogTitle">
      <h2 style="word-break: break-all;">{{Blog.blogTitle}}</h2>
      <small>{{Blog.insertTime}} {{Blog.author}}</small>
    </div>
    <div class="blogContent">
      <MarkdownPreview
        v-model="Blog.blogContent"
        :bordered="false"
        style="height:100%"
        :isPreview="true"
      ></MarkdownPreview>
    </div>
  </div>
</template>

<script>
import MarkdownPreview from "vue-meditor";
import { get_blog_info } from "../../network/getBlogInfo";

export default {
  name: "BlogDetail",
  components: {
    MarkdownPreview
  },
  data() {
    return {
      blogId: this.$route.query.Id,
      Blog: { blogTitle: "", insertTime: "", author: "", blogContent: "" }
    };
  },
  methods: {
    getBlogInfo() {
      get_blog_info(this.blogId).then(res => {
        this.Blog = res.data[0];
      });
    }
  },
  mounted() {
    this.getBlogInfo();
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.blogDetail {
}

.blogTitle {
  margin-top: 3.5rem;
  text-align: center;
}

.blogContent {
  margin-top: 3.5rem;
  min-height: 80vh;
  height: 100%;
}

[v-cloak] {
  display: none;
}
</style>
