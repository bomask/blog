<template>
  <div class="mx-auto" style="max-width:400px">
    <v-list flat>
      <H2>
        <a href="/" style="color: rgb(241,147,114);text-decoration: none;padding:0 16px">所有分类</a>
      </H2>
      <v-list-item-group>
        <v-list-item v-for="(item, i) in sorts" :key="i">
          <v-list-item-content @click="get_blog_by_sortId(item.id)">
            <v-list-item-title v-text="item.labelName"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "CategoriesList",
  props: {
    sorts: Array
  },
  data() {
    return {
      sort: 12345656
    };
  },
  methods: {
    get_blog_by_sortId(sortId) {
      this.send_sortIds(sortId);
      // get_blog_by_sortId(sortId).then(res => {
      //   this.sort = res.data;
      // });
    },
    send_sortIds(sortId) {
      this.$emit("fromCategoriesList", sortId);
    }
  }
};
</script>

<style scoped>
</style>
