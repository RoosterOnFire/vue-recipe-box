<template>
  <TrashIcon class="h-8 w-8 cursor-pointer" @click="trash" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TrashIcon } from '@heroicons/vue/solid';
import useRecipes from '@composable/useRecipes';

export default defineComponent({
  components: { TrashIcon },
  setup() {
    const { trashRecipe } = useRecipes();

    return {
      trash: trashRecipe,
    };
  },
});
</script>
