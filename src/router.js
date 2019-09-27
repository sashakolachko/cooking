import VueRouter from 'vue-router';

import RecipeOfTheDay from './components/pages/recipe/RecipeOfTheDay.vue';
import Recipe from './components/pages/recipe/Recipe.vue';
import SearchRecipes from './components/pages/SearchRecipes.vue';
import AdvancedSearch from './components/pages/AdvancedSearch.vue';

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: RecipeOfTheDay,
      name: "RecipeOfTheDay"
    },
    {
      path: '/recipes',
      component: SearchRecipes,
      name: "SearchRecipes"
    },
    {
      path: '/recipes/:recipeId?',
      component: Recipe,
      name: "Recipe"
    },
    {
      path: '/search',
      component: AdvancedSearch,
      name: "AdvancedSearch"
    },
  ]
});