<template>
  <div class="container space-y-8" v-if="recipe">
    <h2 class="text-3xl">Recipe: {{ recipe.name }}</h2>
    <div>
      <h3>Ingredients</h3>
      <ul class="list-disc list-inside">
        <li class="pl-4" v-for="(ingredient, key) in recipe.ingredients" :key="key">{{ ingredient }}</li>
      </ul>
    </div>
    <div>
      <h3>Directions</h3>
      <ul class="list-decimal list-inside">
        <li class="pl-4" v-for="(direction, key) in recipe.directions" :key="key">{{ direction }}</li>
      </ul>
    </div>
  </div>
  <div class="container space-y-8" v-else>
    <h2 class="italic text-3xl">No recipe selected</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import { RecipeType } from '@type';

export default defineComponent({
  setup() {
    const recipe = inject<RecipeType>('selectedRecipe');

    return {
      recipe,
    };
  },
});
</script>
