<template>
  <teleport to="body">
    <div class="fixed inset-0 z-10 flex items-center justify-center bg-gray-50 bg-opacity-50" @click.self="close">
      <div class="container m-auto flex flex-col content-center bg-gray-300 space-y-8">
        <div class="flex justify-center">
          <h1 class="text-4xl font-semibold">Edit recipe</h1>
          <XIcon class="h-4 w-4 cursor-pointer" @click="close" />
        </div>
        <div class="mx-auto">
          <label class="block" for="recipeName">Recipe</label>
          <input type="text" name="recipeName" v-model="recipe.name" />
        </div>
        <div class="mx-auto">
          <h2>Ingredients</h2>
          <input
            type="text"
            v-for="(ingredient, index) in recipe.ingredients"
            :key="index"
            :value="ingredient"
            @input="updateRecipe('ingredients', index, $event.target.value)"
          />
        </div>
        <div class="mx-auto">
          <h2>Directions</h2>
          <input
            type="text"
            v-for="(direction, index) in recipe.directions"
            :key="index"
            :value="direction"
            @input="updateRecipe('directions', index, $event.target.value)"
          />
        </div>
        <div class="flex justify-center">
          <button type="button" @click="save">Save</button>
          <button type="button" @click="close">Close</button>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue';
import { RecipeType } from '@type';
import XIcon from '@heroicons/vue/solid/PencilAltIcon';

export default defineComponent({
  components: {
    XIcon,
  },
  setup() {
    return {
      recipe: inject<RecipeType>('selectedRecipe'),
      save: inject('toggleEdit'),
      close: inject('toggleEdit'),
      updateRecipe: inject('updateRecipe'),
    };
  },
});
</script>
