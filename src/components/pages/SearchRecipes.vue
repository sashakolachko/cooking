<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <div v-if="morePage">
      <Pagination/>
    </div>
      <v-layout row  justify-space-around >
        <v-flex xs10  sm6 md4 lg3 v-for="recipe in recipes" :key="recipe.uri" height="100%">
          <RecipeCard
            :uri="recipe.recipe.uri"
            :imagePath="recipe.recipe.image"
            :title="recipe.recipe.label"
            :serving="recipe.recipe.yield"
          />
        </v-flex>
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

  }),
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    morePage() {
      return this.$store.state.morePages;
    }
  },
  mounted() {

  }

}
</script>

<style lang="css" scoped>

</style>
