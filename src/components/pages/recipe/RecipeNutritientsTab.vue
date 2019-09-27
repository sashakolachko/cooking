<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <h2>Nutritients per serving (g)</h2>
    <v-row  justify="space-around">
      <v-col class="col-12 col-md-4" v-for="item in totalNutrients"  >
        <v-progress-linear
          :value="parseInt(item.quantity/servings)"
          color="lime darken-1"
          height="25"
          buffer-value="0"
          stream
         >
            <template v-slot="{ value }">
              <p class="pa-0 ma-0 ">{{item.label}} {{ Math.ceil(value) }} {{ item.unit}}</p>
            </template>
        </v-progress-linear>
      </v-col>
    </v-row >
  </v-container>
</template>

<script>
export default {
  name: 'RecipeNutritientsTab',
  props: {
    totalNutrients: Object,
    servings: Number
  }
}
</script>

<style lang="css" scoped>
</style>
