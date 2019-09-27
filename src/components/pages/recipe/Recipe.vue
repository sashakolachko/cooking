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
        Nutrition
        <v-icon>mdi-chart-line</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item   value="tab-1">
        <v-container class="container">
          <v-row  justify="space-around">
            <v-col class="col-12 col-md-6"  >
              <v-img  class="ma-auto" max-height="400" max-width="400" :src="imagePath"></v-img>
            </v-col>
            <v-col class="col-12 col-md-6 text-center">
              <h2>{{title}}</h2>

              <v-chip
                class="ma-2 pa-4"
                color="primary"
                outlined
                text-color="secondary"
              >
                <v-avatar
                  left
                  class="primary lighten-2"
                >
                  {{ servings }}
                </v-avatar>
                Servings
              </v-chip>
              <v-list-item class="text-sm-center text-md-left">
                <v-list-item-content>
                  <v-list-item-title class="pt-2 pb-2" v-for="ingredient in ingredients">
                    {{ ingredient }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <a :href="url">How to prepare</a>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-card flat>
          <v-card-text>Anoter</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-3">
        <v-card flat>
          <v-card-text>Anoter</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Recipe',
  data: () => ({
    tab: null,
    ingredients: [],
    title: '',
    imagePath: '',
    servings: 0,
    url: ''
  }),
  mounted() {
    axios.get(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${this.$route.params.recipeId}&app_id=${this.$store.state.apiId}&app_key=${this.$store.state.apiKey}`)
      .then(response => {
        console.log(response.data[0]);
        this.title = response.data[0].label.toUpperCase();
        this.ingredients = response.data[0].ingredientLines;
        this.servings = response.data[0].yield;
        this.imagePath = response.data[0].image;
        this.url = response.data[0].url;
      })
  }
}
</script>

<style lang="css" scoped>
.container{

}
</style>
