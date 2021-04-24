<template>
  <div class="flex items-center space-x-3">
    <h2 class="text-3xl">Recipe: {{ name }}</h2>
    <pencil-alt-icon class="h-8 w-8 cursor-pointer" @click="edit" />
    <trash-recipe />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { PencilAltIcon } from '@heroicons/vue/solid';
import TrashRecipe from '../Trash/TrashRecipe.vue';

export default defineComponent({
  components: { TrashRecipe, PencilAltIcon },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { name } = toRefs(props);

    return {
      name,
      edit: () => emit('edit'),
    };
  },
});
</script>
