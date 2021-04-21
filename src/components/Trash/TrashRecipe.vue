<template>
  <TrashIcon class="h-8 w-8 cursor-pointer" @click="trash(recipe)" />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { TrashIcon } from '@heroicons/vue/solid';
import { RecipeType } from '@type*';

export default defineComponent({
  components: { TrashIcon },
  props: ['recipe'],
  setup(props) {
    const trash = inject<(recipe: RecipeType) => void>('trashRecipe', () => {});

    return {
      recipe: props.recipe,
      trash,
    };
  },
});
</script>
