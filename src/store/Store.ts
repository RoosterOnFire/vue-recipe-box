import { reactive, ref, computed } from 'vue';
import { RecipeList, Recipe } from '@/types/type';

const recipes = reactive<RecipeList>([
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

const selectedRecipe = ref<Recipe>({} as Recipe);

const isRecipeListEmpty = computed(() => {
  return recipes.length === 0;
});

function addRecipe(): void {
  recipes.push({
    name: 'Recipe',
    ingredients: [],
    directions: [],
  } as Recipe);

  updateSelectedRecipe('Recipe');
}

function updateRecipe(
  action: 'name' | 'ingredients' | 'directions',
  index: number,
  newValue: string
): void {
  const recipe = recipes.filter(
    (recipe) => recipe.name === selectedRecipe.value.name
  )[0];

  if (action === 'name') {
    recipe.name = newValue;
  } else {
    recipe[action][index] = newValue;
  }
}

function addIngredient(): void {
  selectedRecipe.value.ingredients.push('');
}

function addDirection(): void {
  selectedRecipe.value.directions.push('');
}

function updateName(event: Event): void {
  const target = event.target as HTMLInputElement;
  target && updateRecipe('name', 0, target.value);
}

function updateIngredients(key: number, event: Event): void {
  const target = event.target as HTMLInputElement;
  target && updateRecipe('ingredients', key, target.value);
}

function updateDirection(key: number, event: Event): void {
  const target = event.target as HTMLInputElement;
  target && updateRecipe('directions', key, target.value);
}

function updateSelectedRecipe(name: string): void {
  selectedRecipe.value = recipes.filter((recipe) => recipe.name === name)[0];
}

function trashRecipe(target: Recipe | undefined = undefined) {
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
  selectedRecipe.value = {} as Recipe;
}

export default function useStore() {
  return {
    recipes,
    selectedRecipe,
    isRecipeListEmpty,
    addRecipe,
    addIngredient,
    addDirection,
    updateName,
    updateRecipe,
    updateIngredients,
    updateDirection,
    updateSelectedRecipe,
    trashRecipe,
    trashIngredient,
    trashDirection,
  };
}
