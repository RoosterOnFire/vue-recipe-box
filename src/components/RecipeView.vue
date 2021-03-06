<script lang="ts">
import { defineComponent, ref } from "vue";
import { PencilAltIcon } from "@heroicons/vue/solid";
import RecipeViewList from "@/components/RecipeViewList.vue";
import RecipeViewName from "@/components/RecipeViewName.vue";
import AppTrashRecipe from "@/components/AppTrashRecipe.vue";
import useStore from "@/store/Store";

export default defineComponent({
  components: {
    PencilAltIcon,
    RecipeViewList,
    RecipeViewName,
    AppTrashRecipe,
  },
  emits: ["delete", "updateRecipe"],
  setup() {
    const {
      selectedRecipe,
      addIngredient,
      addDirection,
      updateIngredients,
      updateDirection,
    } = useStore();

    const mode = ref<boolean>(false);

    function switchEdit() {
      mode.value = !mode.value;
    }

    return {
      recipe: selectedRecipe,
      mode,
      switchEdit,
      addIngredient,
      addDirection,
      updateIngredients,
      updateDirection,
    };
  },
});
</script>

<template>
  <transition name="fade" mode="out-in">
    <div v-if="recipe && recipe.name" class="container-look recipe-view">
      <RecipeViewName
        v-model:name="recipe.name"
        :mode="mode"
        class="md:col-span-2"
      >
        <PencilAltIcon class="icon" @click="switchEdit" />
        <TrashRecipe :recipe="recipe" />
      </RecipeViewName>
      <RecipeViewList
        header="Ingredients"
        type="ingredient"
        :items="recipe.ingredients"
        :mode="mode"
        :add-value="addIngredient"
        :update-value="updateIngredients"
      />
      <RecipeViewList
        header="Directions"
        type="direction"
        :items="recipe.directions"
        :mode="mode"
        :add-value="addDirection"
        :update-value="updateDirection"
      />
    </div>
    <div v-else class="container-look recipe-view">
      <h2 class="text-3xl">No recipe selected</h2>
    </div>
  </transition>
</template>

<style lang="postcss">
.recipe-view {
  @apply grid grid-cols-1 md:grid-cols-2 place-items-center gap-4;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity ease-linear duration-200;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-enter-to,
.fade-leave-form {
  @apply opacity-100;
}
</style>
