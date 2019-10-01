<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl fluid >
    <div v-if="morePage">
      <Pagination/>
    </div>
    <transition enter-active-class=" animated fadeIn"
    leave-active-class=" animated fadeOut">
    <div class="d-flex mt-5 secondary--text justify-center">
      <h3  v-if="recipes.length == 0">Sorry! Nothing found.</h3>
    </div>
    </transition>
    <transition-group
      enter-active-class=" animated bounceInRight"
      leave-active-class=" animated fadeOut"
      :duration="{ enter: 1500, leave: 800 }"
      tag="layout"
      class="box">
        <v-flex
          style="transition-delay: 1s"
          xs11 sm6 md4 lg3
          v-for="(recipe, index) in recipes"
          v-bind:key="recipe"
          >
          <RecipeCard
            :uri="recipe.recipe.uri"
            :imagePath="recipe.recipe.image"
            :title="recipe.recipe.label"
            :serving="recipe.recipe.yield"
          />
        </v-flex>
    </transition-group>
  </v-container>
</template>

<script>
import RecipeCard from './recipe/RecipeCard.vue';
import Pagination from './Pagination.vue';
export default {
  name: 'SearchRecipes',
  components: {
    RecipeCard,
    Pagination
  },
  data: () => ({}),
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    morePage() {
      return this.$store.state.morePages;
    },
  },
}
</script>

<style lang="css" >
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.box{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
}
</style>
