<template>
  <div class="flex flex-col items-center max-w-2xl h-screen p-4 mx-auto gap-4 text-2xl">
    <h1 class="font-serif italic text-6xl">Recipe box</h1>
    <RecipeList
      class="p-2 bg-gray-100 border-2 border-gray-400 rounded shadow-md"
      :recipes="recipes"
      :isEmpty="isRecipeListEmpty"
      @select="updateSelectedRecipe"
      @add="addNewRecipe"
    />
    <RecipeView
      class="p-2 bg-gray-100 border-2 border-gray-400 rounded shadow-xl"
      :recipe="selectedRecipe"
      @edit="toggleEdit"
    />
    <RecipeEdit v-if="isEditOpen" :recipe="selectedRecipe" @updateRecipe="updateRecipe" @close="toggleEdit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, provide } from 'vue';
import RecipeList from '@component/RecipeList.vue';
import RecipeView from '@component/RecipeView.vue';
import RecipeEdit from '@component/RecipeEdit.vue';
import { RecipeListType, RecipeType } from '@type';

export default defineComponent({
  name: 'App',
  components: {
    RecipeList,
    RecipeView,
    RecipeEdit,
  },
  setup() {
    const recipes = reactive<RecipeListType>([
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

    const selectedRecipe = ref<RecipeType>({} as RecipeType);

    const updateRecipe = (action: 'ingredients' | 'directions', index: number, newValue: string) => {
      recipes.filter((recipe) => recipe.name === selectedRecipe.value.name)[0][action][index] = newValue;
    };

    const deleteRecipe = (target: RecipeType | undefined = undefined) => {
      const index = recipes.indexOf(target || selectedRecipe.value);

      recipes.splice(index, 1);

      clearSelectedRecipe();
    };
    provide('deleteRecipe', deleteRecipe);

    const updateSelectedRecipe = (name: string) => {
      selectedRecipe.value = recipes.filter((recipe) => recipe.name === name)[0];
    };

    function clearSelectedRecipe() {
      selectedRecipe.value = {} as RecipeType;
    }

    const isRecipeListEmpty = computed(() => {
      return recipes.length === 0;
    });

    const addNewRecipe = () => {
      recipes.push({
        name: 'Recipe',
        ingredients: [],
        directions: [],
      } as RecipeType);

      updateSelectedRecipe('Recipe');

      toggleEdit();
    };

    const isEditOpen = ref(false);
    const toggleEdit = () => {
      isEditOpen.value = !isEditOpen.value;
    };

    return {
      addNewRecipe,
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
