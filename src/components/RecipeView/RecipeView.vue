<template>
  <transition name="fade" mode="out-in">
    <div v-if="recipe && recipe.name" class="default-container recipe-view">
      <recipe-view-name
        v-model:name="recipe.name"
        :mode="mode"
        class="md:col-span-2"
      >
        <pencil-alt-icon class="icon" @click="switchEdit" />
        <trash-recipe />
      </recipe-view-name>
      <recipe-view-list
        header="Ingredients"
        type="ingredient"
        :items="recipe.ingredients"
        :mode="mode"
        :add-value="addIngredient"
        :update-value="updateIngredients"
      />
      <recipe-view-list
        header="Directions"
        type="direction"
        :items="recipe.directions"
        :mode="mode"
        :add-value="addDirection"
        :update-value="updateDirection"
      />
    </div>
    <div v-else class="default-container">
      <h2 class="italic text-3xl">No recipe selected</h2>
    </div>
  </transition>
</template>

<style scoped>
.recipe-view {
  @apply grid grid-cols-1 md:grid-cols-2 w-full space-y-4;
}
</style>

<script lang="ts">
import { defineComponent, PropType, toRefs, ref } from 'vue';
import { PencilAltIcon } from '@heroicons/vue/solid';
import { RecipeType } from '../../types/type';
import RecipeViewList from './RecipeViewList.vue';
import RecipeViewName from './RecipeViewName.vue';
import TrashRecipe from '../Trash/TrashRecipe.vue';
import useRecipes from '../../composables/useRecipes';

export default defineComponent({
  components: {
    PencilAltIcon,
    RecipeViewList,
    RecipeViewName,
    TrashRecipe,
  },
  emits: ['delete', 'updateRecipe'],
  setup(props, { emit }) {
    const {
      selectedRecipe,
      addIngredient,
      addDirection,
      updateIngredients,
      updateDirection,
    } = useRecipes();

    const mode = ref<boolean>(false);

    function switchEdit() {
      mode.value = !mode.value;
    }

    return {
      recipe: selectedRecipe,
      mode,
      switchEdit,
      addIngredient,
      addDirection,
      updateIngredients,
      updateDirection,
    };
  },
});
</script>
