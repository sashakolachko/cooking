<template lang="html">
  <v-form ref="form" fluid>
    <div  class="pa-3 header-container"  >
      <v-layout  row wrap justify-space-around align-center>
        <v-flex class="ml-4" hidden-xs-only >
          <v-img
            src="../assets/logo.png"
            max-height="80"
            max-width="80"
          >
          </v-img>
        </v-flex>
        <v-flex xs10 sm6 md4 lg5>
          <v-text-field
            :rules="inputRules"
            v-model="searchWord"
            color="secondary"
            placeholder="What would you like to find?"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs3 sm2 md2 lg2 text-center >
          <v-btn fab small icon outlined :color="buttonColor" @click="search()">
            <v-icon>search</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs10 sm2 md2 lg2 text-center class="order-first order-sm-last" >
          <v-btn   text class="pa-2" height="60" color="primary" @click="advancedSearch()">
              <span>Advanced <br> Search</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </v-form>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Header',
  data: () => ({
    searchWord: '',
    inputRules: [
      v => v.length >= 5 || 'Minimum length is 5 characters'
    ],
  }),
  methods: {
    search() {
      if (this.$refs.form.validate()) {
        this.$store.commit('setSearchWord', this.searchWord);
        axios.get(
          `https://api.edamam.com/search?q=${this.searchWord}&from=${this.fromPage}&to=${this.toPage}&app_id=${this.$store.state.apiId}&app_key=${this.$store.state.apiKey}&${this.$store.state.healthLabelsValue}&${this.$store.state.dishValue}&${this.$store.state.dietValue}&${this.$store.state.mealValue}&${this.$store.state.calories}`
        ).then(response => {
          this.$store.commit('setRecipes', response.data.hits);
          this.$store.commit('setMorePages', response.data.more);
          this.$store.dispatch('cleanAdvancedSearchFilters');
          if (this.$router.currentRoute.fullPath != '/recipes') {
            this.$router.push('/recipes');
          }
        });
      }
    },
    advancedSearch() {
      if (this.$router.currentRoute.fullPath != '/search') {
        this.$router.push('/search');
      }
    }
  },
  computed: {
    buttonColor() {
      if (this.searchWord.length >= 5) {
        return 'primary';
      }
      return 'grey';
    },
    fromPage() {
      return this.$store.state.from;
    },
    toPage() {
      return this.$store.state.to;
    }
  }
}
</script>

<style lang="css" scoped>
  .header-container{
    background-color: white;
  }
</style>
