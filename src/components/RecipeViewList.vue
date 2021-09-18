<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { PlusCircleIcon } from "@heroicons/vue/solid";
import ListTransition from "@/components/RecipeListTransition.vue";
import RecipeViewTrash from "@/components/RecipeViewTrash.vue";

export default defineComponent({
  components: { PlusCircleIcon, RecipeViewTrash, ListTransition },
  props: {
    type: {
      type: String as PropType<"ingredient" | "direction">,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<string[]>,
      required: true,
    },
    mode: {
      type: Boolean,
      required: false,
    },
    addValue: {
      type: Function,
      required: true,
    },
    updateValue: {
      type: Function as PropType<(key: number, event: Event) => void>,
      required: true,
    },
  },
  setup(props) {
    const { type, header, items, mode, addValue, updateValue } = toRefs(props);

    return {
      type,
      header,
      items: items || [],
      mode,
      addValue,
      updateValue,
    };
  },
});
</script>

<template>
  <div class="recipe-view-list">
    <h2 class="header">{{ header }}</h2>
    <ListTransition>
      <li v-for="(value, index) in items" :key="index" class="list-item">
        <input
          class="input"
          type="text"
          v-if="mode"
          :value="value"
          @input.self="updateValue(index, $event)"
        />
        <RecipeViewTrash v-if="mode" :type="type" :index="index" />
        <template v-else>{{ value }}</template>
      </li>
    </ListTransition>
    <PlusCircleIcon
      v-if="mode"
      class="icon plus-circle-icon"
      @click="() => addValue()"
    />
  </div>
</template>

<style lang="postcss" scoped>
.recipe-view-list {
  @apply flex flex-col gap-y-4;
}

.header {
  @apply font-normal text-xl;
}

.list-item {
  @apply flex items-center space-x-3;
}

.input {
  @apply p-2;
}
</style>
