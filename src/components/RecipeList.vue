<template>
  <div class="container">
    <plus-circle-icon class="icon plus-circle-icon" @click="addNewRecipe" />
    <list-transition>
      <li
        class="list-item"
        v-for="recipe in recipes"
        :key="recipe.name"
        @click.self="$emit('select', recipe.name)"
      >
        {{ recipe.name }}
        <trash-recipe :recipe="recipe" />
      </li>
    </list-transition>
  </div>
</template>

<style scoped>
.list-item {
  @apply flex justify-between hover:bg-gray-300 cursor-pointer;
}
</style>

<script lang="ts">
import { defineComponent, toRefs, PropType } from 'vue';
import { PlusCircleIcon } from '@heroicons/vue/solid';
import { RecipeListType } from '@type';
import ListTransition from './ListTransition.vue';
import TrashRecipe from './Trash/TrashRecipe.vue';

export default defineComponent({
  components: {
    ListTransition,
    PlusCircleIcon,
    TrashRecipe,
  },
  props: {
    recipes: {
      type: Array as PropType<RecipeListType>,
      require: true,
    },
    isEmpty: {
      type: Boolean,
      require: true,
    },
  },
  emits: ['add', 'select', 'delete'],
  setup(props, context) {
    const { recipes, isEmpty } = toRefs(props);

    return {
      recipes: recipes || [],
      isEmpty,
      addNewRecipe: () => context.emit('add'),
    };
  },
});
</script>
