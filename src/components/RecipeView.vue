<template>
  <div class="container">
    <h2>Recipe: {{ name }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RecipeType } from '@type';

export default defineComponent({
  props: {
    recipe: Object as PropType<RecipeType>,
  },
  setup(props) {
    const name = props.recipe?.name;
    const ingredients = props.recipe?.ingredients;
    const directions = props.recipe?.directions;

    return {
      name,
      ingredients,
      directions,
    };
  },
});
</script>
