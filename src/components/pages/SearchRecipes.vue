<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <div v-if="morePage">
      <Pagination/>
    </div>
      <v-layout row  justify-space-around align-baseline>
        <transition-group
        enter-active-class=" animated bounceInRight"
        leave-active-class=" animated fadeOut" :duration="{ enter: 1500, leave: 800 }"
          tag="div" class="box">
          <v-flex  style="transition-delay: 1s"  xs10  sm6 md4 lg3 v-for="(recipe, index) in recipes" v-bind:key="recipe" height="100%" >
            <RecipeCard
              :uri="recipe.recipe.uri"
              :imagePath="recipe.recipe.image"
              :title="recipe.recipe.label"
              :serving="recipe.recipe.yield"
            />
          </v-flex>
        </transition-group>
      </v-layout>

  </v-container>
</template>

<script>
import RecipeCard from './recipe/RecipeCard.vue';
import Pagination from './Pagination.vue';
require('vue2-animate/dist/vue2-animate.min.css');
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
  methods: {
    add() {
      this.items.splice(0);
      this.items.push('dv');
      // this.items = ['234243', 'd4565465464fvd,', '345654543r', 'dfv45646fdv'];
    }
  },
  mounted() {

  }

}
</script>

<style lang="css" >
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
.box{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
