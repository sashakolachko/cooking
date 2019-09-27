<template lang="html">
  <v-footer padless class="footer">
  <v-col
    class="text-center black--text font-weight-light"
    cols="12"
  >
    {{ new Date().getFullYear() }} — <span>Cooking</span>
  </v-col>
</v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="css" scoped>
.footer{
  border-top:1px solid grey;
}
</style>
