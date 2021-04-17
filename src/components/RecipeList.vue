<template>
  <div class="container">
    <ul class="list-disc list-inside">
      <li v-for="recipe in recipes" :key="recipe.name" @click="$emit('select', recipe.name)">{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { RecipeListType } from '@type';

export default defineComponent({
  setup() {
    const recipes = inject<RecipeListType>('recipes');

    return {
      recipes,
    };
  },
  emits: {
    select: null,
  },
});
</script>
