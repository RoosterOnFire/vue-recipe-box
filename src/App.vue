<template>
  <div class="flex flex-col items-center max-w-2xl h-screen p-4 mx-auto gap-4 text-2xl">
    <h1 class="font-serif italic text-6xl">Recipe box</h1>
    <recipe-list
      class="p-2 bg-gray-100 border-2 border-gray-400 rounded shadow-md"
      :recipes="recipes"
      :isEmpty="isRecipeListEmpty"
      @select="updateSelectedRecipe"
      @add="addRecipe"
    />
    <recipe-view
      class="p-2 bg-gray-100 border-2 border-gray-400 rounded shadow-xl"
      :recipe="selectedRecipe"
      @edit="toggleEdit"
    />
    <recipe-edit v-if="isEditOpen" :recipe="selectedRecipe" @updateRecipe="updateRecipe" @close="toggleEdit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import RecipeList from '@component/RecipeList.vue';
import RecipeView from '@component/RecipeView/RecipeView.vue';
import RecipeEdit from '@component/RecipeEdit/RecipeEdit.vue';
import useRecipes from './composables/useRecipes';

export default defineComponent({
  name: 'App',
  components: {
    RecipeList,
    RecipeView,
    RecipeEdit,
  },
  setup() {
    const { recipes, selectedRecipe, isRecipeListEmpty, addRecipe, updateRecipe, updateSelectedRecipe } = useRecipes();

    const isEditOpen = ref(false);
    function toggleEdit() {
      isEditOpen.value = !isEditOpen.value;
    }

    return {
      addRecipe,
      isEditOpen,
      isRecipeListEmpty,
      recipes,
      selectedRecipe,
      toggleEdit,
      updateRecipe,
      updateSelectedRecipe,
    };
  },
});
</script>
