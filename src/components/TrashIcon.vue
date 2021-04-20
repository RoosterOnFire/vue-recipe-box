<template>
  <TrashIcon class="h-8 w-8 cursor-pointer" @click="trash(recipe)" />
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import TrashIcon from '@heroicons/vue/solid/TrashIcon';

export default defineComponent({
  components: { TrashIcon },
  props: ['recipe'],
  setup(props) {
    return {
      recipe: props.recipe,
      trash: inject('deleteRecipe'),
    };
  },
});
</script>
