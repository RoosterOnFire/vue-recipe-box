<template>
  <teleport to="body">
    <div class="fixed inset-0 z-10 flex items-center justify-center bg-gray-50 bg-opacity-50" @click.self="close">
      <div class="container m-auto p-2 flex flex-col content-center bg-gray-300 border border-gray-900 space-y-8">
        <div class="flex justify-end">
          <XIcon class="h-8 w-8 cursor-pointer" @click="close" />
        </div>
        <div class="flex justify-center">
          <h1 class="text-4xl font-semibold">Edit recipe</h1>
        </div>
        <div class="mx-auto">
          <label class="block" for="recipeName">Recipe</label>
          <input type="text" name="recipeName" v-model="recipe.name" />
        </div>
        <div class="mx-auto">
          <h2>Ingredients</h2>
          <input
            type="text"
            v-for="(ingredient, key) in recipe.ingredients"
            :key="key"
            :value="ingredient"
            @input.self="updateRecipe('ingredients', key, $event)"
          />
        </div>
        <div class="mx-auto">
          <h2>Directions</h2>
          <input
            type="text"
            v-for="(direction, key) in recipe.directions"
            :key="key"
            :value="direction"
            @input.self="updateRecipe('directions', key, $event)"
          />
        </div>
        <div class="flex justify-center">
          <button type="button" @click="close">Close</button>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { RecipeType } from '@type';
import XIcon from '@heroicons/vue/solid/XIcon';

export default defineComponent({
  components: {
    XIcon,
  },
  props: {
    recipe: {
      type: Object as PropType<RecipeType>,
      required: true,
    },
  },
  emits: ['updateRecipe', 'close'],
  setup(props, context) {
    const { recipe } = toRefs(props);

    function close() {
      context.emit('close');
    }

    function updateRecipe(action: 'ingredients' | 'directions', key: number, event: Event) {
      event && context.emit('updateRecipe', action, key, (event.target as HTMLInputElement).value);
    }

    return {
      recipe,
      close,
      updateRecipe,
    };
  },
});
</script>
