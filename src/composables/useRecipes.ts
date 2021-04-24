import { reactive, ref, computed } from 'vue';
import { RecipeListType, RecipeType } from '@type';

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

function addIngredient() {
  selectedRecipe.value.ingredients.push('');
}

function addDirection() {
  selectedRecipe.value.directions.push('');
}

function updateSelectedRecipe(name: string): void {
  selectedRecipe.value = recipes.filter((recipe) => recipe.name === name)[0];
}

function trashRecipe(target: RecipeType | undefined = undefined) {
  const index = recipes.indexOf(target || selectedRecipe.value);

  recipes.splice(index, 1);

  clearSelectedRecipe();
}

function trashIngredient(index: number): void {
  selectedRecipe.value.ingredients.splice(index, 1);
}

function trashDirection(index: number): void {
  selectedRecipe.value.directions.splice(index, 1);
}

function clearSelectedRecipe(): void {
  selectedRecipe.value = {} as RecipeType;
}

export default function useRecipes(): any {
  return {
    recipes,
    selectedRecipe,
    isRecipeListEmpty,
    addRecipe,
    addIngredient,
    addDirection,
    updateRecipe,
    updateSelectedRecipe,
    trashRecipe,
    trashIngredient,
    trashDirection,
  };
}
