<template>
  <transition name="fade" mode="out-in">
    <div class="container space-y-8 transition duration-500 ease-in-out" v-if="recipe && recipe.name">
      <div class="flex items-center space-x-3">
        <h2 class="text-3xl">Recipe: {{ recipe.name }}</h2>
        <PencilAltIcon class="h-8 w-8 cursor-pointer" @click="$emit('edit')" />
        <TrashIcon class="h-8 w-8 cursor-pointer" @click="$emit('delete', recipe.name)" />
      </div>
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
  </transition>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { RecipeType } from '@type';
import { PencilAltIcon, TrashIcon } from '@heroicons/vue/solid';

export default defineComponent({
  components: {
    PencilAltIcon,
    TrashIcon,
  },
  emits: ['delete', 'edit'],
  setup() {
    return {
      recipe: inject<RecipeType>('selectedRecipe'),
    };
  },
});
</script>
