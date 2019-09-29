<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <div v-if="morePage">
      <Pagination/>
    </div>
      <v-layout row  justify-space-around align-baseline>
        <transition-group name="fade" tag="div" class="box">
          <v-flex  xs10  sm6 md4 lg3 v-for="(recipe, index) in recipes" v-bind:key="index" height="100%" >
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

export default {
  name: 'SearchRecipes',
  components: {
    RecipeCard,
    Pagination
  },
  data: () => ({
    show: true
  }),
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    morePage() {
      return this.$store.state.morePages;
    },
  },
  mounted() {

  }

}
</script>

<style lang="css" >
.box{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-active{
  transition-delay: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
