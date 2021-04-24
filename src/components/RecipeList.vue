<template>
  <div class="container">
    <plus-circle-icon
      class="h-8 w-8 mx-auto mb-2 cursor-pointer"
      @click="addNewRecipe"
    />
    <transition-group name="list" tag="ul" class="list-none list-inside">
      <li
        class="flex justify-between hover:bg-gray-300 cursor-pointer"
        v-for="recipe in recipes"
        :key="recipe.name"
        @click.self="$emit('select', recipe.name)"
      >
        {{ recipe.name }}
        <trash-recipe :recipe="recipe" />
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType } from 'vue';
import TrashRecipe from './Trash/TrashRecipe.vue';
import { PlusCircleIcon } from '@heroicons/vue/solid';
import { RecipeListType } from '@type';

export default defineComponent({
  components: {
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
