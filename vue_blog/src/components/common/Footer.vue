<template>
  <div>
    <v-footer
      padless>
      <v-card
        flat
        min-height
        tile
        class="white--text text-center"
        width="100%"
        color="#182F41">
        <v-card-text>
        </v-card-text>
        {{footTxt}} {{ new Date().getFullYear() }} {{name}}
        <!--        <v-divider style="background-color: white"></v-divider>-->

        <v-card-text class="white--text">
          <strong>备案号:<a href="http://beian.miit.gov.cn"
                         style="color: rgb(241,147,114);text-decoration: none;">陕ICP备2020017978号</a></strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      // footTxt: "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      footTxt: 'Copyright ©',
      name: 'Yang`s Blog'
    }
  }
}
</script>

<style scoped>
  .fontSize {
    font-size: 8px;
  }
</style>
