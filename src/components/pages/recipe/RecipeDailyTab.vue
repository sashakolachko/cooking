<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <h2>Nutritients per serving (%)</h2>
    <v-row  justify="space-around">
      <v-col class="col-12 col-md-4" v-for="item in totalDaily"  >
        <v-progress-linear
          :value="parseInt(item.quantity/servings)"
          color="yellow darken-1"
          height="25"
          buffer-value="0"
          stream
         >
            <template v-slot="{ value }">
              <p class="pa-0 ma-0 ">{{item.label}} {{ Math.ceil(value) }}%</p>
            </template>
        </v-progress-linear>
      </v-col>
    </v-row >
  </v-container>
</template>

<script>
export default {
  name: 'RecipeDailyTab',
  props: {
    totalDaily: Object,
    servings: Number
  }
}
</script>

<style lang="css" scoped>
</style>
