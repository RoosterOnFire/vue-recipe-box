<template>
  <div class="container">
    <ul class="list-none list-inside">
      <li
        class="hover:bg-gray-300 cursor-pointer"
        v-for="recipe in recipes"
        :key="recipe.name"
        @click="$emit('select', recipe.name)"
      >
        {{ recipe.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { RecipeListType } from '@type';

export default defineComponent({
  setup() {
    return {
      recipes: inject<RecipeListType>('recipes'),
    };
  },
  emits: ['select'],
});
</script>
