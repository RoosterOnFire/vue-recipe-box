<template>
  <div class="flex flex-col items-center max-w-xl h-screen p-4 mx-auto gap-4 text-2xl">
    <h1 class="font-serif italic text-6xl">{{ heading }}</h1>
    <RecipeList class="p-2 bg-gray-100 border-2 border-gray-400 rounded shadow-md" @select="updateSelectedRecipe" />
    <RecipeView class="p-2 bg-gray-100 border-2 border-gray-400 rounded shadow-xl" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import RecipeList from '@component/RecipeList.vue';
import RecipeView from '@component/RecipeView.vue';
import { RecipeListType, RecipeType } from '@type';

export default defineComponent({
  name: 'App',
  components: {
    RecipeList,
    RecipeView,
  },
  setup() {
    const heading = 'Recipe box';
    const selectedRecipe = ref<RecipeType>();
    const recipes = ref<RecipeListType>([
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
    ]);

    const updateSelectedRecipe = (name: string) => {
      selectedRecipe.value = recipes.value.filter((recipe) => recipe.name === name)[0];
    };

    provide('recipes', recipes);
    provide('selectedRecipe', selectedRecipe);

    return {
      heading,
      updateSelectedRecipe,
    };
  },
});
</script>
