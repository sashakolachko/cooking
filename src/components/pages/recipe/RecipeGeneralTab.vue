<template lang="html">
  <v-container class="container">
    <v-row  justify="space-around">
      <v-col class="col-12 col-md-6"  >
        <v-img  class="ma-auto" max-height="400" max-width="400" :src="imagePath"></v-img>
      </v-col>
      <v-col class="col-12 col-md-6 text-center">
        <h2>{{title}}</h2>
        <div class="">
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
          <v-btn rounded color="yellow darken-1"  @click="countCalories() ">
              <span>Count Calories</span>
          </v-btn>
          <v-dialog v-model="dialog" width="600">
            <v-card class="pt-5">
              <div class="ml-5">
                <h3>Total calories: {{ calories }}</h3>
                <h3>Calories per serving: {{ caloriesServing }}</h3>
              </div>
              <div class=" mt-5 text-center">
                <v-progress-circular
                size="150"
                :value="caloriesPercent"
                width="15"
                color="primary darken-1"
                >Daily {{caloriesPercent}}%</v-progress-circular>
              </div>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary darken-1" text @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <v-list-item class="text-sm-center text-md-left">
          <v-list-item-content>
            <v-list-item-title class="pt-2 pb-2" v-for="ingredient in ingredients">
              {{ ingredient }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div class="">
          <v-chip
            class="ma-2 pa-4"
            color="primary"
            outlined
            text-color="secondary"
            v-for="label in healthLabels"
          >
            {{ label }}
          </v-chip>
        </div>
        <a class="d-block mt-5" :href="url">How to prepare</a>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import axios from 'axios';
export default {
  name: 'RecipeGeneralTab',
  props: {
    imagePath: String,
    title: String,
    servings: Number,
    ingredients: Array,
    healthLabels: Array,
    url: String
  },
  data: () => ({
    calories: 0,
    caloriesServing: 0,
    caloriesPercent: 0,
    dialog: false,
  }),
  methods: {
    countCalories() {
      if (this.calories) {
        this.dialog = true;
      } else {
        axios.post(`https://api.edamam.com/api/nutrition-details?app_id=${this.$store.state.apiId}&app_key=${this.$store.state.apiKey}`, {
            "yield": this.servings,
            "ingr": this.ingredients
          })
          .then(response => {
            this.calories = response.data.calories;
            this.caloriesServing = parseInt(this.calories / this.servings);
            this.caloriesPercent = parseInt(this.caloriesServing * 100 / 1900);
            this.dialog = true;
          });
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
