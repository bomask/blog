<!--
 * @Author: your name
 * @Date: 2021-01-05 18:39:46
 * @LastEditTime: 2021-04-19 16:33:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\views\BlogItem.vue
-->
<template>
  <div class="BlogDetail">
    <div class="logo">
      <a aria-current="page" href="/">Hello Orange</a>
    </div>
    <back-to-top>
      <button id="btp">Top</button>
    </back-to-top>
    <BlogDetail></BlogDetail>
    </div>
</template>

<script>
import BlogDetail from "../components/common/BlogDetail";
import BackToTop from 'vue-backtotop'

export default {
  name: "home",
  components: { BlogDetail,BackToTop },
  data() {
    return {
      drawer: false
    };
  },
  methods: {}
};
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
  min-height: 90vh;
}

#btp{
background-color:  rgb(241, 147, 114);
color: #ffffff;
width: 50px;
height: 50px;
border-radius: 20%;
}
</style>
