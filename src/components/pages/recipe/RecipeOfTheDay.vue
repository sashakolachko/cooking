<template lang="html">
 <v-container fluid fill-height class="container">
  <transition
    appear
    appear-class = "custom-appear-class"
    appear-active-class = "animated zoomInRight">

    <div class="recipe">
      <div class="note">
        <p class="note-text">Recipe of the day</p>
      </div>
      <p class="title">{{ label }}</p>
      <p> Calories: {{ calories }}</p>
      <div class="item">
        <v-chip
        class="ma-1"
        color="success"
        outlined
        v-for="item of healthLabels"
      >
        {{item}}
      </v-chip>
      </div>
      </v-img>
    </div>
  </transition>
 </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RecipeOfTheDay',
  data: () => ({
    label: '',
    image: '',
    calories: '',
    healthLabels: []
  }),
  mounted() {
    axios.get(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_7bfb04eafaee9cd2f702eb7cbcbf29df&app_id=${this.$store.state.apiId}&app_key=${this.$store.state.apiKey}`)
      .then(response => {
        this.label = response.data[0].label;
        this.image = response.data[0].image;
        this.calories = parseInt(response.data[0].calories);
        this.healthLabels = response.data[0].healthLabels;
      });

  }
}
</script>

<style lang="css" scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  .container{
    height: 90vh;
    background-image: linear-gradient(to right bottom,
        rgba(126, 213, 111, 0.8),
        rgba(40, 180, 133, 0.8)),
      url('../../../assets/back.jpg');
    background-size: cover;
    background-position: top;
    position:relative;
  }
  .recipe{
    width:300px;
    height:350px;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top:20%;
    right:20%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .note{
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #055a3a;
    width:100px;
    height:100px;
    border-radius: 50%;
    position: absolute;
    left:-40px;
    top:-40px;
  }
  .note-text{
    width:80%;
    text-align: center;
    margin:0;
    color:white;
  }
  .title{
    margin-left:20px;
    margin-top:55px;
  }
  .item{
    text-align: center;
    width:95%;
  }
</style>
