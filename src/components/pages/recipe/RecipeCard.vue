<template lang="html">
  <v-card flat class="text-xs-center ma-2">
    <v-img  @click="goToRecipe()" :src="imagePath" class="pointer-item"></v-img>
    <v-flex d-flex justify-space-between>
      <v-card-title class=" pl-3 card-title pointer-item" @click="goToRecipe()">
        {{ title }}
      </v-card-title>
      <v-icon @click="goToRecipe()" class="mr-1 pointer-item" color="primary" large>mdi-chevron-right</v-icon>
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
  .pointer-item:hover{
    cursor: pointer;
  }
  .card-title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    font-size: 25px;
    font-weight: 300;
  }
</style>
