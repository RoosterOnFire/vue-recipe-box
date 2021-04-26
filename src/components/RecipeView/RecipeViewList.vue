<template>
  <div>
    <h3 class="header">{{ header }}</h3>
    <list-transition>
      <li v-for="(value, index) in items" :key="index" class="list-item">
        <input
          v-if="mode"
          type="text"
          :value="value"
          @input.self="editValue(index, $event)"
        />
        <trash-value v-if="mode" :type="type" :index="index" />
        <template v-else>{{ value }}</template>
      </li>
    </list-transition>
    <plus-circle-icon
      v-if="mode"
      class="icon plus-circle-icon"
      @click="() => addValue()"
    />
  </div>
</template>

<style scoped>
.header {
  @apply mb-4;
}

.list-item {
  @apply pl-4 flex space-x-3;
}
</style>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { PlusCircleIcon } from '@heroicons/vue/solid';
import ListTransition from '../ListTransition.vue';
import TrashValue from '@component/Trash/TrashValue.vue';

export default defineComponent({
  components: { PlusCircleIcon, TrashValue, ListTransition },
  props: {
    type: {
      type: String as PropType<'ingredient' | 'direction'>,
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
    editValue: {
      type: Function as PropType<(key: number, event: Event) => void>,
      required: true,
    },
  },
  emits: ['updateRecipe'],
  setup(props) {
    const { type, header, items, mode, addValue, editValue } = toRefs(props);

    return {
      type,
      header,
      items: items || [],
      mode,
      addValue,
      editValue,
    };
  },
});
</script>
