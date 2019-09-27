<template lang="html">
  <v-card flat class="text-xs-center ma-2">
    <v-img :src="imagePath"></v-img>
    <v-flex d-flex justify-space-between>
      <v-card-title class="title">
        {{ title }}
      </v-card-title>
      <v-icon @click="goToRecipe()" class="mr-1 icon-item" color="primary" large>mdi-chevron-right</v-icon>
    </v-flex>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RecipeCard',
  props: {
    uri: String,
    imagePath: String,
    title: String,
    serving: Number
  },
  methods: {
    goToRecipe() {
      let fixedUri = this.uri.match('(?<=_).*')[0];
      this.$router.push({
        name: "Recipe",
        params: {
          recipeId: fixedUri
        }
      });
    }
  }
}
</script>

<style lang="css" scoped>
.icon-item:hover{
  cursor: pointer;
}
</style>
