<template lang="html">
  <v-card flat>
    <v-tabs
      v-model="tab"
      background-color="secondary accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tab href="#tab-1">
        General
        <v-icon>mdi-information</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Daily
        <v-icon>mdi-brightness-percent</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Nutritients
        <v-icon>mdi-weight-kilogram</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item   value="tab-1">
        <RecipeGeneralTab
        :imagePath="imagePath"
        :title="title"
        :servings="servings"
        :ingredients="ingredients"
        :healthLabels="healthLabels"
        :url="url"
        />
      </v-tab-item>

      <v-tab-item value="tab-2">
        <RecipeDailyTab
          :totalDaily="totalDaily"
          :servings="servings"
        />
      </v-tab-item>

      <v-tab-item value="tab-3">
        <RecipeNutritientsTab
          :totalNutrients="totalNutrients"
          :servings="servings"
        />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import axios from 'axios';
import RecipeGeneralTab from './RecipeGeneralTab.vue';
import RecipeDailyTab from './RecipeDailyTab.vue';
import RecipeNutritientsTab from './RecipeNutritientsTab.vue';
export default {
  name: 'Recipe',
  components: {
    RecipeGeneralTab,
    RecipeDailyTab,
    RecipeNutritientsTab
  },
  data: () => ({
    tab: null,
    ingredients: [],
    healthLabels: [],
    title: '',
    imagePath: '',
    servings: 0,
    url: '',
    totalDaily: [],
    totalNutrients: [],
  }),
  mounted() {
    axios.get(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${this.$route.params.recipeId}&app_id=${this.$store.state.apiId}&app_key=${this.$store.state.apiKey}`)
      .then(response => {

        this.title = response.data[0].label.toUpperCase();
        this.ingredients = response.data[0].ingredientLines;
        this.healthLabels = response.data[0].healthLabels;
        this.servings = response.data[0].yield;
        this.imagePath = response.data[0].image;
        this.url = response.data[0].url;
        this.totalDaily = response.data[0].totalDaily;
        this.totalNutrients = response.data[0].totalNutrients;
      })
  }
}
</script>

<style lang="css" scoped>
</style>
