import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    apiId: '90af6065',
    apiKey: '2e3519c6d6451008fa8d9e9425a5df8c',
    recipes: [],
    morePages: false,
    searchWord: '',
    from: 0,
    to: 12,
    healthLabels: ['alcohol-free', 'dairy-free', 'egg-free', 'fish-free', 'gluten-free', 'keto-friendly', 'kosher', 'lupine-free', 'mustard-free', 'No-oil-added', 'low-sugar', 'paleo', 'peanut-free', 'pecatarian', 'pork-free', 'red-meat-free', 'sesame-free', 'shellfish-free', 'soy-free', 'sugar-conscious', 'vegan', 'vegetarian', '	wheat-free'],
    mealType: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
    dietLabels: ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium', ],
    dishType: ['Bread', 'Cereals', 'Condiments and sauces', 'Drinks', 'Desserts ', 'Main course', 'Pancake', 'Preps', 'Preserve', 'Salad', 'Sandwiches', 'Side dish', 'Soup', 'Starter', 'Sweets'],
    healthLabelsValue: '',
    dishValue: '',
    dietValue: '',
    mealValue: '',
    calories: '',
    range: [0, 1000],
  },
  mutations: {
    setSearchWord(state, word) {
      state.searchWord = word;
    },
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
    setMorePages(state, morePages) {
      state.morePages = morePages;
    },
    setAdvancedSearch(state, advancedSearch) {
      state.advancedSearch = advancedSearch;
    },
    setHealthLabelsValue(state, label) {
      state.healthLabelsValue = label;
    },
    setDishValue(state, dish) {
      state.dishValue = dish;
    },
    setDietValue(state, diet) {
      state.dietValue = diet;
    },
    setMealValue(state, meal) {
      state.mealValue = meal;
    },
    setCalories(state, calories) {
      state.calories = calories;
    },
    setFromPage(state, page) {
      state.from = page;
    },
    setToPage(state, page) {
      state.to = page;
    },
    nextPage(state) {
      state.from = state.from + 13;
      state.to = state.to + 13;
    },
    prevPage(state) {
      state.from = state.from - 13;
      state.to = state.to - 13;
    },
    updateRecipe(state) {
      axios.get(`https://api.edamam.com/search?q=${state.searchWord}&from=${state.from}&to=${state.to}&app_id=${state.apiId}&app_key=${state.apiKey}`)
        .then(response => {
          state.recipes = response.data.hits;
          state.morePages = response.data.more;
        });
    }
  },
  actions: {
    nextRecipePage(context) {
      context.commit('nextPage');
      context.commit('updateRecipe');
    },
    prevRecipePage(context) {
      context.commit('prevPage');
      context.commit('updateRecipe');
    },
    cleanAdvancedSearchFilters(context) {
      context.commit('setHealthLabelsValue', '');
      context.commit('setDishValue', '');
      context.commit('setDietValue', '');
      context.commit('setMealValue', '');
      context.commit('setCalories', '');
    }
  }
})