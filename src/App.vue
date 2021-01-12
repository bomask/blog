<!--
 * @Author: your name
 * @Date: 2021-01-05 18:39:46
 * @LastEditTime: 2021-01-11 16:52:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\App.vue
-->
<template>
  <v-app>
    <div id="app">
      <router-view />
    </div>
    <div>
      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import Footer from "./components/common/Footer";
export default {
  name: "App",
  components: { Footer }
};
</script>

<style>
</style>
