<template>
  <div class="abstract">
    <h3 style="word-break: break-all;">

      <router-link :to="{path:'/BlogItem',query:{Id:abstract.blogId}}" style="text-decoration:none;">
        {{abstract.blogTitle}}
      </router-link>

    </h3>

    <small class="otherInfo">
      <div id="createDate">
        {{abstract.insertTime}}
      </div>
      <div id="sort">
        {{abstract.updateTime}}
      </div>
    </small>

    <p style="word-break: break-all;">{{abstract.describe}}</p>

  </div>
</template>

<script>
export default {
  name: 'Abstract',
  props: {
    abstract: Object,
  },
  methods: {},
  data () {
    return {
      // title: "tit嘻嘻嘻嘻嘻嘻嘻嘻寻寻寻寻寻le",
      // summary: "dddddddddd111111111111111111111111111sadasdadassssssssssssssssssdasd 111111111111111111111111111111",
      // date: "2020-10-03",
      // sort: "英语"
    }
  },
}
</script>

<style scoped>

  .abstract {
    margin-top: 30px;
  }

  .abstract h3 a {
    height: 40px;
    line-height: 40px;
    color: rgb(241, 147, 114);
    margin-bottom: 10px;
    font-size: 1.35rem;
    font-family: Montserrat, sans-serif;
  }

  .abstract h3 a:hover {
    color: rgb(24, 47, 65);
  }

  .abstract p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    word-break: break-all;
    -webkit-box-orient: vertical;
    margin-bottom: 1.75rem;
  }

  .otherInfo {
    height: 30px;
    line-height: 30px;
    display: flex;
  }

  #createDate, #sort {
    padding-right: 30px;
  }


</style>
