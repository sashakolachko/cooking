<template lang="html">
  <v-container  class="container">
    <v-row  justify="space-around">
      <v-col class="col-12 col-sm-12 col-md-12 col-lg-11" >
        <v-select
          v-model="healthLabelsValue"
          :items="healthLabels"
          attach
          chips
          label="Health labels"
          multiple
        >
        </v-select>
      </v-col>
      <v-col class="col-12 col-sm-12 col-md-5 col-lg-5">
        <v-select
          v-model="dietValue"
          :items="diet"
          attach
          chips
          label="Diet"
        >
        </v-select>
      </v-col>
      <v-col class=" col-12 col-sm-12 col-md-5 col-lg-5">
        <v-select
          v-model="mealValue"
          :items="meal"
          attach
          chips
          label="Meal Type"
        >
        </v-select>
      </v-col>
      <v-col class="col-12 col-sm-12 col-md-8 col-lg-8">
        <v-select
          v-model="dishValue"
          :items="dish"
          attach
          multiple
          chips
          label="Dish Type"
        >
        </v-select>
      </v-col>
      <v-col class="col-11 pa-0">
          <p class="text-center text-sm-center text-md-left pa-0 ma-0">
            Calories Range per serving
          </p>

      </v-col>
      <v-col class="col-12 col-sm-12 col-md-12 col-lg-11">
        <v-range-slider
            v-model="range"
            :max="max"
            :min="min"
            hide-details
            class="align-center"
        >
          <template v-slot:prepend>
            <v-text-field
              v-model="range[0]"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
          <template v-slot:append>
            <v-text-field
              v-model="range[1]"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 60px"
            ></v-text-field>
          </template>
        </v-range-slider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AdvancedSearch',
  data: () => ({
    healthLabelsValue: [],
    dishValue: [],
    dietValue: '',
    mealValue: '',
    min: 0,
    max: 2500,
    range: [0, 1000],
  }),
  watch: {
    healthLabelsValue() {
      let health = this.healthLabelsValue.length != 0 ? 'health=' + this.healthLabelsValue.join('&health=') : '';
      this.$store.commit('setHealthLabelsValue', health);
    },
    dishValue() {
      let dish = this.dishValue != 0 ? 'dishType=' + this.dishValue.join('&dishType=') : '';
      this.$store.commit('setDishValue', dish);
    },
    dietValue() {
      let diet = this.dietValue.length != 0 ? `diet=${this.dietValue}` : '';
      this.$store.commit('setDietValue', diet);
    },
    mealValue() {
      let meal = this.mealValue != 0 ? `mealType=${this.mealValue}` : '';
      this.$store.commit('setMealValue', meal);
    },
    range() {
      let calories = `calories=${this.min}-${this.max}`;
      this.$store.commit('setCalories', calories);
    }
  },
  computed: {
    healthLabels() {
      return this.$store.state.healthLabels;
    },
    diet() {
      return this.$store.state.dietLabels;
    },
    meal() {
      return this.$store.state.mealType;
    },
    dish() {
      return this.$store.state.dishType;
    }
  }
}
</script>

<style lang="css" scoped>
.container{
  /* background-color: #692cc1; */
}
.item{
  background-color: white;
}
</style>
