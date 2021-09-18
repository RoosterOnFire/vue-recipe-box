<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { TrashIcon } from "@heroicons/vue/solid";
import useStore from "@/store/Store";

export default defineComponent({
  components: { TrashIcon },
  props: {
    type: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { type, index } = toRefs(props);

    const { trashIngredient, trashDirection } = useStore();

    function trash() {
      if (type.value === "ingredient") {
        trashIngredient(index.value);
      } else if (type.value === "direction") {
        trashDirection(index.value);
      }
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
