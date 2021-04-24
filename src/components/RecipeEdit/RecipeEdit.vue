<template>
  <teleport to="body">
    <div class="fixed inset-0 z-10 flex items-center justify-center bg-gray-50 bg-opacity-50" @click.self="close">
      <div class="grid md:grid-cols-2 justify-items-center gap-5 p-4 bg-gray-300 border border-gray-900">
        <x-icon class="h-8 w-8 md:col-span-2 justify-self-end cursor-pointer" @click="close" />
        <h1 class="md:col-span-2 text-4xl font-semibold">Edit recipe</h1>
        <recipe-edit-name v-model:name="recipe.name" />
        <recipe-edit-list
          header="Ingredients"
          button-add-text="Add ingredient"
          :items="recipe.ingredients"
          :add-value="addIngredient"
          :edit-value="updateIngredients"
        >
          <trash-ingredient />
        </recipe-edit-list>
        <recipe-edit-list
          header="Directions"
          button-add-text="Add direction"
          :items="recipe.directions"
          :add-value="addDirection"
          :edit-value="updateDirection"
        >
          <trash-direction />
        </recipe-edit-list>
        <button class="md:col-span-2" type="button" @click="close">Close</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { RecipeType } from '@type';
import { XIcon } from '@heroicons/vue/solid';
import RecipeEditName from './RecipeEditName.vue';
import RecipeEditList from './RecipeEditList.vue';
import TrashDirection from '@component/Trash/TrashDirection.vue';
import TrashIngredient from '@component/Trash/TrashIngredient.vue';
import TrashRecipe from '@component/Trash/TrashRecipe.vue';
import useRecipes from '../../composables/useRecipes';

export default defineComponent({
  components: {
    RecipeEditList,
    RecipeEditName,
    TrashDirection,
    TrashIngredient,
    TrashRecipe,
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

    function updateRecipe(action: 'ingredients' | 'directions', key: number, target: EventTarget | null) {
      target && context.emit('updateRecipe', action, key, (target as HTMLInputElement).value);
    }

    const { addIngredient, addDirection } = useRecipes();

    function updateIngredients(key: number, event: Event) {
      updateRecipe('ingredients', key, event.target);
    }

    function updateDirection(key: number, event: Event) {
      updateRecipe('directions', key, event.target);
    }

    return {
      recipe,
      close,
      addIngredient,
      addDirection,
      updateIngredients,
      updateDirection,
    };
  },
});
</script>
