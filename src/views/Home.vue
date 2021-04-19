<template>
  <div style="position: relative">
    <div style="position: absolute;">
      <v-btn
        depressed
        elevation="2"
        small
        @click.stop="drawer = !drawer"
        style="margin: 20px 0 0 0px;height:auto;float: left"
      >
        <img src="../../src/assets/open.png" alt />
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
        <CategoriesList :sorts="sorts" @fromCategoriesList="getBlogSort"></CategoriesList>
      </div>
    </v-navigation-drawer>

    <div class="main">

      <div class="logo">
        <a aria-current="page" class href="/">
         <typical
          class="typicalWrapper"
          :steps="['Hello', 1000, 'Hello Orange! 👋', 4000]"
          :loop="Infinity"
        ></typical></a>

      </div>

      <div class="introduce">
        <img :src="picSrc" />
        <p>
          一位
          <a href="http://test.1000px.top">测试开发工程师</a>的博客，不仅仅记录技术。
          <br />轰轰烈烈，输多赢少，年少也曾梦想倚剑走天涯，现在已承认平庸。
        </p>
      </div>

      <div class="blogLists" v-cloak>
        <div v-for="(item,index) in pageList" :key="index">
          <Abstract :abstract="item"></Abstract>
        </div>
      </div>

      <div>
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination v-model="currentPage" @input="jumpToPage" :length="totalPage"></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>


<script>
import Abstract from "../components/common/Abstract";
import CategoriesList from "../components/common/CategoriesList";
import BlogDetail from "../components/common/BlogDetail";
import { get_blog_list, get_label } from "../network/getBlogInfo";
import typical from "vue-typical";

export default {
  name: "home",
  components: { Abstract, CategoriesList, BlogDetail,typical},
  data() {
    return {
      currentPage: 1,
      totalPage: 1,
      num: 6,
      // 每页显示多少条
      drawer: false,
      sorts: [{ labelName: "test" }],
      currentSort: 0,
      pageList: [{}],
      test: "",
      picSrc:
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1784711035,279581618&fm=26&gp=0.jpg"
    };
  },
  methods: {
    getBlogList(currentPage, num, currentSort) {
      get_blog_list(currentPage, num, currentSort).then(res => {
        this.pageList = res.data.data;
        this.totalPage = res.data.totalPage;
        console.log(res.data.totalPage);
      });
    },
    getLabel() {
      get_label().then(res => {
        this.sorts = res.data;
      });
    },
    getBlogSort(sortId) {
      /**
       * @description: 如果标签发生变化 ，currentPage 为初始值
       * @param {*} this
       * @return {*}
       */
      if (this.currentSort != sortId) {
        this.currentSort = sortId;
        this.currentPage = 1;
      }
      this.getBlogList(this.currentPage, this.num, this.currentSort);
    },
    jumpToPage() {
      /**
       * @description:添加分页跳转,路由变化，并且调用获取list的接口
       * @param {*}
       * @return {*}
       */
      this.$router.push({
        path: "/pageList",
        query: {
          currentPage: this.currentPage,
          currentSort: this.currentSort,
          num: this.num
        }
      });
      this.getBlogList(this.currentPage, this.num, this.currentSort);
    },
    watchThePath() {
      /**
       * @description: 主要用于直接给出地址时候，能获取到对应的参数值,取到的值 直接转为int
       * @param {*}
       * @return {*}
       */
      if (
        this.$route.query.num &&
        this.$route.query.currentPage &&
        this.$route.query.currentSort
      ) {
        this.num = parseInt(this.$route.query.num);
        this.currentPage = parseInt(this.$route.query.currentPage);
        this.currentSort = parseInt(this.$route.query.currentSort);
      }
    }
  },
  beforeMount() {
    this.watchThePath();
    this.getBlogList(this.currentPage, this.num, this.currentSort);
    this.getLabel();
  }
  // watch: {
  //   $route: "watchThePath"
  // }
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

.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
