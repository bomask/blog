<template>
  <!-- 参考这个博客实现  https://overreacted.io/-->

  <div class="blogDetail" v-cloak>

    <div class="blogTitle">
      <h2 style="word-break: break-all;">{{Blog.blogTitle}}</h2>
      <small>{{Blog.insertTime}} {{Blog.author}}</small>
    </div>
    <div class="blogContent">
      <MarkdownPreview v-model="Blog.blogContent" :bordered="false" height="100%" :isPreview="true" ></MarkdownPreview>
    </div>
  </div>


</template>

<script>
import MarkdownPreview from 'vue-meditor';
import { get_blog_info } from '../../network/getBlogInfo'


export default {
  name: 'BlogDetail',
  components: {
    MarkdownPreview
  },
  data () {
    return {
      blogId: this.$route.query.Id,
      Blog: { blogTitle: '', insertTime: '', author: '', blogContent: '' }
    }
  },
  methods: {
    getBlogInfo () {
      get_blog_info(this.blogId).then(res => {
        this.Blog = res.data[0]
      })
    }
  },
  mounted () {
    this.getBlogInfo()
    window.scrollTo(0,0)
  }
}
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
  }

  [v-cloak] {
    display: none;
  }
</style>
