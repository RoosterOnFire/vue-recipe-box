<script lang="ts">
import { defineComponent, toRefs } from "vue";
import useStore from "@/store/Store";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    mode: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["update:name"],
  setup(props) {
    const { name, mode } = toRefs(props);

    const { updateName } = useStore();

    return {
      name,
      mode,
      updateName,
    };
  },
});
</script>

<template>
  <div class="flex space-x-3">
    <template v-if="mode">
      <label for="recipeName">Recipe:</label>
      <input
        type="text"
        name="recipeName"
        :value="name"
        @change.self="updateName($event)"
      />
    </template>
    <h2 v-else class="text-3xl">Recipe: {{ name }}</h2>
    <slot />
  </div>
</template>
