<template>
  <div>
    <h3 class="mb-4">{{ header }}</h3>
    <ul class="list-disc list-inside">
      <template v-for="(value, index) in items" :key="index">
        <li v-if="mode" class="pl-4 flex space-x-3">
          <input
            type="text"
            :value="value"
            @input.self="editValue(index, $event)"
          />
          <trash-value :type="type" :index="index" />
        </li>
        <li v-else class="pl-4">{{ value }}</li>
      </template>
      <plus-circle-icon
        v-if="mode"
        class="h-8 w-8 mx-auto mt-4 cursor-pointer"
        @click="() => addValue()"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';
import { PlusCircleIcon } from '@heroicons/vue/solid';
import TrashValue from '@component/Trash/TrashValue.vue';

export default defineComponent({
  components: { PlusCircleIcon, TrashValue },
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
