<template lang="html">
  <v-app-bar height="84" app class="align-center">
      <v-row class="align-center">
        <v-col cols="12" sm="3" md="3" lg="1">
          <v-img
          src="logo1.png"
           max-height="80"
           max-width="80"
          >
          </v-img>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="4">
          <v-text-field
          clearable
          color="secondary"
          placeholder="What would you like to cook?"
          prepend-icon="search"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="4">
          <v-btn color="primary">Search</v-btn>
        </v-col>
     </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>
</style>
