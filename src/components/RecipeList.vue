<template>
  <div class="default-container">
    <plus-circle-icon class="icon plus-circle-icon" @click="addRecipe" />
    <list-transition>
      <li
        class="list-item"
        v-for="recipe in recipes"
        :key="recipe.name"
        @click.self="updateSelectedRecipe(recipe.name)"
      >
        {{ recipe.name }}
        <trash-recipe :recipe="recipe" />
      </li>
    </list-transition>
  </div>
</template>

<style scoped>
.list-item {
  @apply flex justify-between hover:bg-gray-300 cursor-pointer;
}
</style>

<script lang="ts">
import { defineComponent, toRefs, PropType } from 'vue';
import { PlusCircleIcon } from '@heroicons/vue/solid';
import { RecipeListType } from '@type';
import ListTransition from './ListTransition.vue';
import TrashRecipe from './Trash/TrashRecipe.vue';
import useRecipes from '../composables/useRecipes';

export default defineComponent({
  components: {
    ListTransition,
    PlusCircleIcon,
    TrashRecipe,
  },
  setup() {
    const {
      recipes,
      isRecipeListEmpty,
      addRecipe,
      updateSelectedRecipe,
    } = useRecipes();

    return {
      recipes: recipes || [],
      isEmpty: isRecipeListEmpty,
      addRecipe,
      updateSelectedRecipe,
    };
  },
});
</script>
