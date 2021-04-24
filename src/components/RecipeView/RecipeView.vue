<template>
  <transition name="fade" mode="out-in">
    <div class="container space-y-8 transition duration-500 ease-in-out" v-if="recipe && recipe.name">
      <recipe-view-name v-model:name="recipe.name" :mode="mode">
        <pencil-alt-icon class="h-8 w-8 cursor-pointer" @click="switchEdit" />
        <trash-recipe />
      </recipe-view-name>
      <recipe-view-list
        header="Ingredients"
        button-add-text="Add ingredient"
        type="ingredient"
        :items="recipe.ingredients"
        :mode="mode"
        :add-value="addIngredient"
        :edit-value="updateIngredients"
      />
      <recipe-view-list
        header="Directions"
        button-add-text="Add direction"
        type="direction"
        :items="recipe.directions"
        :mode="mode"
        :add-value="addDirection"
        :edit-value="updateDirection"
      />
    </div>
    <div class="container space-y-8" v-else>
      <h2 class="italic text-3xl">No recipe selected</h2>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, ref } from 'vue';
import { PencilAltIcon } from '@heroicons/vue/solid';
import { RecipeType } from '../../types/type';
import RecipeViewList from './RecipeViewList.vue';
import RecipeViewName from './RecipeViewName.vue';
import TrashRecipe from '@component/Trash/TrashRecipe.vue';
import useRecipes from '../../composables/useRecipes';

export default defineComponent({
  components: {
    PencilAltIcon,
    RecipeViewList,
    RecipeViewName,
    TrashRecipe,
  },
  props: {
    recipe: {
      type: Object as PropType<RecipeType>,
      required: true,
    },
  },
  emits: ['delete', 'updateRecipe'],
  setup(props, { emit }) {
    const { recipe } = toRefs(props);

    const { addIngredient, addDirection } = useRecipes();

    const mode = ref<boolean>(false);

    function switchEdit() {
      mode.value = !mode.value;
    }

    function updateRecipe(action: 'ingredients' | 'directions', key: number, target: EventTarget | null) {
      target && emit('updateRecipe', action, key, (target as HTMLInputElement).value);
    }

    function updateIngredients(key: number, event: Event) {
      updateRecipe('ingredients', key, event.target);
    }

    function updateDirection(key: number, event: Event) {
      updateRecipe('directions', key, event.target);
    }

    return {
      recipe,
      mode,
      switchEdit,
      addIngredient,
      addDirection,
      updateIngredients,
      updateDirection,
    };
  },
});
</script>
