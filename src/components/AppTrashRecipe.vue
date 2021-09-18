<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Recipe } from "@/types/type";
import { TrashIcon } from "@heroicons/vue/solid";
import useStore from "@/store/Store";

export default defineComponent({
  components: { TrashIcon },
  props: {
    recipe: Object as PropType<Recipe>,
  },
  setup(props) {
    const { trashRecipe } = useStore();

    function trash() {
      trashRecipe(props.recipe);
    }

    return {
      trash,
    };
  },
});
</script>

<template>
  <TrashIcon class="icon" @click="trash" />
</template>
