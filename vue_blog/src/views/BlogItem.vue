<template>
  <div class="BlogDetail">
    <div class="logo">
      <a aria-current="page"  href="/">Hello Orange</a>
    </div>
    <BlogDetail></BlogDetail>
  </div>
</template>

<script>
import BlogDetail from '../components/common/BlogDetail'

export default {
  name: 'home',
  components: { BlogDetail },
  data () {
    return {
      drawer: false,
    }
  },
  methods:{

  }
}
</script>


<style scoped>
  .logo {
    font-size: 50px;
    font-weight: 900;
    padding-bottom: 30px;
  }

  .logo a {
    box-shadow: none;
    text-decoration: none;
    color: rgb(241, 147, 114);
  }

  .logo a:hover {
    color: rgb(24, 47, 65);
  }

  .BlogDetail {
    margin-left: auto;
    margin-right: auto;
    max-width: 48rem;
    padding: 2.625rem 1.3125rem;
    min-height: 90vh
  }
</style>
