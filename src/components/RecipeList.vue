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
      <li class="hover:bg-gray-300 cursor-pointer" @click.self="addNewRecipe">
        <button class="italic" type="button" @click="addNewRecipe">Add new recipe</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { RecipeListType } from '@type';

export default defineComponent({
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
  emits: ['add', 'select'],
  setup(props, context) {
    const { recipes, isEmpty } = toRefs(props);

    return {
      recipes,
      isEmpty,
      addNewRecipe: () => context.emit('add'),
    };
  },
});
</script>
