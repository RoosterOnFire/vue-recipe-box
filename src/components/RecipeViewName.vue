<script lang="ts">
import { defineComponent, toRefs } from "vue";
import useRecipes from "@/store/Store";

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

    const { updateName } = useRecipes();

    return {
      name,
      mode,
      updateName,
    };
  },
});
</script>

<template>
  <div class="recipe-view-name">
    <template v-if="mode">
      <input
        class="recipe-view-name-input"
        type="text"
        name="recipeName"
        :value="name"
        @change.self="updateName($event)"
      />
    </template>
    <h2 v-else class="text-3xl">{{ name }}</h2>
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.recipe-view-name {
  @apply flex items-center space-x-3;
}

.recipe-view-name-input {
  @apply p-2;
}
</style>
