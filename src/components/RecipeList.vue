<script lang="ts">
import { defineComponent } from "vue";
import { PlusCircleIcon } from "@heroicons/vue/solid";
import ListTransition from "@/components/RecipeListTransition.vue";
import AppTrashRecipe from "@/components/AppTrashRecipe.vue";
import useStore from "@/store/Store";

export default defineComponent({
  components: {
    ListTransition,
    PlusCircleIcon,
    AppTrashRecipe,
  },
  setup() {
    const { recipes, isRecipeListEmpty, addRecipe, updateSelectedRecipe } =
      useStore();

    return {
      recipes: recipes || [],
      isEmpty: isRecipeListEmpty,
      addRecipe,
      updateSelectedRecipe,
    };
  },
});
</script>

<template>
  <div class="default-container">
    <PlusCircleIcon class="icon plus-circle-icon" @click="addRecipe" />
    <ListTransition>
      <li
        class="list-item"
        v-for="recipe in recipes"
        :key="recipe.name"
        @click.self="updateSelectedRecipe(recipe.name)"
      >
        {{ recipe.name }}
        <AppTrashRecipe :recipe="recipe" />
      </li>
    </ListTransition>
  </div>
</template>

<style lang="postcss" scoped>
.list-item {
  @apply flex justify-between hover:bg-gray-300 cursor-pointer;
}
</style>