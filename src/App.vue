<template>
  <v-app>
    <div id="app" >
      <router-view/>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </v-app>


</template>

<script>
import Footer from "./components/common/Footer";
export default {
  name: 'App',
  components:{Footer}
}
</script>

<style>
</style>
