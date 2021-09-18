<template>
  <TrashIcon class="icon" @click="trash" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RecipeType } from "@/types/type";
import { TrashIcon } from "@heroicons/vue/solid";
import useRecipes from "@/composables/useRecipes";

export default defineComponent({
  components: { TrashIcon },
  props: {
    recipe: Object as PropType<RecipeType>,
  },
  setup(props) {
    const { trashRecipe } = useRecipes();

    const trash = () => trashRecipe(props.recipe);

    return {
      trash,
    };
  },
});
</script>
