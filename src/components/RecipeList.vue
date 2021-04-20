<template>
  <div class="container">
    <ul class="list-none list-inside">
      <li
        class="flex justify-between hover:bg-gray-300 cursor-pointer"
        v-for="recipe in recipes"
        :key="recipe.name"
        @click="$emit('select', recipe.name)"
      >
        {{ recipe.name }}
        <TrashIcon class="h-8 w-8 cursor-pointer" @click="deleteRecipe(recipe)" />
      </li>
      <li class="hover:bg-gray-300 cursor-pointer" @click.self="addNewRecipe">
        <button class="italic" type="button" @click="addNewRecipe">Add new recipe</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import TrashIcon from '@heroicons/vue/solid/TrashIcon';
import { RecipeListType, RecipeType } from '@type';

export default defineComponent({
  components: {
    TrashIcon,
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
      recipes,
      isEmpty,
      addNewRecipe: () => context.emit('add'),
      deleteRecipe: (target: RecipeType) => context.emit('delete', target),
    };
  },
});
</script>
