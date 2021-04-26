<template>
  <recipe-view-list header="Ingredients" type="ingredient" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecipeViewList from './RecipeViewList.vue';

export default defineComponent({
  components: {
    RecipeViewList,
  },
});
</script>
