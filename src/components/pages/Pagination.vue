<template lang="html">
<div class="d-flex justify-center pa-3">
  <v-btn v-if="this.$store.state.from > 0" color="primary" class="mr-5" @click="prevPage()">
    <v-icon>mdi-chevron-left</v-icon>
    Back
  </v-btn>
  <v-btn color="primary" @click="nextPage()">
    Next
    <v-icon>mdi-chevron-right</v-icon>
  </v-btn>
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
</style>
