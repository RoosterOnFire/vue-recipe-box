<template>
  <div class="container" v-if="recipe">
    <h2>Recipe: {{ recipe.name }}</h2>
    <ul>
      <li v-for="(ingredient, key) in recipe.ingredients" :key="key">{{ ingredient }}</li>
    </ul>
    <ul>
      <li v-for="(direction, key) in recipe.directions" :key="key">{{ direction }}</li>
    </ul>
  </div>
  <div class="container" v-else>
    <h2>No recipe selected</h2>
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
