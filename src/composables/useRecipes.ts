import { reactive, ref, computed } from 'vue';
import { RecipeListType, RecipeType } from '@type';

export default function useRecipes() {
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

  const isRecipeListEmpty = computed(() => {
    return recipes.length === 0;
  });

  function addRecipe() {
    recipes.push({
      name: 'Recipe',
      ingredients: [],
      directions: [],
    } as RecipeType);

    updateSelectedRecipe('Recipe');
  }

  function updateRecipe(action: 'ingredients' | 'directions', index: number, newValue: string): void {
    recipes.filter((recipe) => recipe.name === selectedRecipe.value.name)[0][action][index] = newValue;
  }

  function updateSelectedRecipe(name: string): void {
    selectedRecipe.value = recipes.filter((recipe) => recipe.name === name)[0];
  }

  function trashRecipe(target: RecipeType | undefined = undefined) {
    const index = recipes.indexOf(target || selectedRecipe.value);

    recipes.splice(index, 1);

    clearSelectedRecipe();
  }

  function trashIngredient(key: number): void {
    selectedRecipe.value.ingredients.filter((_, index) => index !== key);
  }

  function trashDirection(key: number): void {
    selectedRecipe.value.directions.filter((_, index) => index !== key);
  }

  function clearSelectedRecipe(): void {
    selectedRecipe.value = {} as RecipeType;
  }

  return {
    recipes,
    selectedRecipe,
    isRecipeListEmpty,
    addRecipe,
    updateRecipe,
    updateSelectedRecipe,
    trashRecipe,
    trashIngredient,
    trashDirection,
  };
}
