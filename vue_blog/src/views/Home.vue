<template>

  <div style="position: relative">
    <div style="position: absolute;">

      <v-btn depressed
             elevation="2"
             small
             @click.stop="drawer = !drawer" style="margin: 20px 0 0 0px;height:auto;float: left"><img src="../../src/assets/open.png" alt="">
      </v-btn>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      width="240px"
      temporary
      height="100%"
      style="position:fixed; left:0px; top:0px;"
      hide-overlay
    >
      <div class="sidebar">

        <CategoriesList :sorts="sorts" @fromCategoriesList="sendBlogList"></CategoriesList>
      </div>
    </v-navigation-drawer>

    <div class="main">

      <div class="logo">
        <a aria-current="page" class="" href="/">Hello Orange</a>
      </div>

      <div class="introduce">
        <img :src="picSrc">
        <p>一位<a href="http://test.1000px.top">测试开发工程师</a>的博客，不仅仅记录技术。
          </br>轰轰烈烈，输多赢少，年少也曾梦想倚剑走天涯，现在已承认平庸。
        </p>
      </div>
      <div class="blogLists" v-cloak>
        <div v-for="(item,index) in pageList" :key="index">
          <Abstract :abstract=item></Abstract>
        </div>
      </div>


    </div>
  </div>
</template>


<script>
import Abstract from '../components/common/Abstract'
import CategoriesList from '../components/common/CategoriesList'
import BlogDetail from '../components/common/BlogDetail'
import { get_blog_list, get_label } from '../network/getBlogInfo'


export default {
  name: 'home',
  components: { Abstract, CategoriesList, BlogDetail },
  data () {
    return {
      drawer: false,
      sorts: [{ labelName: 'test' }],
      pageList: [{}],
      test: '',
      picSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1784711035,279581618&fm=26&gp=0.jpg'
    }
  },
  methods: {
    getBlogList () {
      get_blog_list().then(res => {
        this.pageList = res.data
      })
    },
    getLabel () {
      get_label().then(res => {
        this.sorts = res.data
      })
    },
    sendBlogList (res) {
      this.pageList = res
    },
  },
  beforeMount () {
    this.getBlogList()
    this.getLabel()
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
    color: rgb(24, 47, 65);
  }

  .introduce {
    display: flex;
    margin-bottom: 3.5rem;
  }

  .introduce img {
    margin-right: 1rem;
    margin-bottom: 0;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  .introduce p {
    max-width: 510px;
    line-height: 1.85rem;
  }

  .introduce p a {
    box-shadow: none;
    text-decoration: none;
    color: rgb(241, 147, 114);
  }

  .sidebar {
    float: left;
    width: 100%;
  }

  .main {
    margin-left: auto;
    margin-right: auto;
    max-width: 48rem;
    padding: 2.625rem 1.3125rem;
    min-height: 90vh;
  }

  .blogLists {
    min-height: 80vh;
  }

  [v-cloak] {
    display: none;
  }
</style>
