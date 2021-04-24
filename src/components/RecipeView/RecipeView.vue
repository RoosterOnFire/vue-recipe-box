<template>
  <transition name="fade" mode="out-in">
    <div class="container space-y-8 transition duration-500 ease-in-out" v-if="recipe && recipe.name">
      <recipe-view-name :name="recipe.name" @edit="editRecipe" />
      <recipe-view-list header="Ingredients" :items="recipe.ingredients" />
      <recipe-view-list header="Directions" :items="recipe.directions" />
    </div>
    <div class="container space-y-8" v-else>
      <h2 class="italic text-3xl">No recipe selected</h2>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { RecipeType } from '../../types/type';
import RecipeViewName from './RecipeViewName.vue';
import RecipeViewList from './RecipeViewList.vue';

export default defineComponent({
  components: {
    RecipeViewName,
    RecipeViewList,
  },
  props: {
    recipe: {
      type: Object as PropType<RecipeType>,
      required: true,
    },
  },
  emits: ['edit', 'delete'],
  setup(props, { emit }) {
    const { recipe } = toRefs(props);

    return {
      recipe,
      editRecipe: () => emit('edit'),
    };
  },
});
</script>
