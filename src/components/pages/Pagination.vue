<template lang="html">
<div class="d-flex justify-center pa-3">
  <transition name="btn">
  <v-btn v-if="this.$store.state.from > 0" color="primary" class="mr-5" @click="prevPage()">
    <v-icon>mdi-chevron-left</v-icon>
    Back
  </v-btn>
</transition>
<transition name="btn">
  <v-btn color="primary" @click="nextPage()">
    Next
    <v-icon>mdi-chevron-right</v-icon>
  </v-btn>
</transition>

</div>
</template>

<script>
export default {
  name: 'Pagination',
  methods: {
    prevPage() {
      this.$store.dispatch('prevRecipePage');
    },
    nextPage() {
      this.$store.dispatch('nextRecipePage');
    }
  }
}
</script>

<style lang="css" scoped>
  .btn-enter-active, .btn-leave-active {
    transition: opacity .5s, transform .5s;
  }
  .btn-enter-active{
    transition-delay: .2s;
  }
  .btn-enter, .btn-leave-to {
    opacity: 0;
  }
  .btn-enter-to,
  .btn-leave {
    opacity: 1;
  }
</style>
