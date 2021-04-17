<template>
  <div class="flex flex-col items-center h-screen p-4">
    <h1 class="">{{ heading }}</h1>
    <RecipeList :list="recipes" />
    <div class="container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecipeList from './components/RecipeList.vue';

export default defineComponent({
  name: 'App',
  components: {
    RecipeList,
  },
  setup() {
    const heading = 'Recipe box';

    const recipes = [
      {
        name: 'RecipeName1',
        ingredients: ['ingredient11'],
        directions: ['directions11'],
      },
      {
        name: 'RecipeName2',
        ingredients: ['ingredient21', 'ingredient22'],
        directions: ['directions21', 'directions22'],
      },
      {
        name: 'RecipeName3',
        ingredients: ['ingredient31', 'ingredient32', 'ingredient33'],
        directions: ['directions31', 'directions32', 'directions33'],
      },
    ];

    return {
      heading,
      recipes,
    };
  },
});
</script>
