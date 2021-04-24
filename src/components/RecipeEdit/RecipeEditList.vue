<template>
  <div>
    <h2 class="text-lg">{{ header }}</h2>
    <div class="list-item list-none" v-for="(value, index) in items" :key="index">
      <input type="text" :value="value" @input.self="editValue(index, $event)" />
      <slot :index="index" />
    </div>
    <button type="button" @click="addValue">{{ buttonAddText }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';

export default defineComponent({
  props: {
    header: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<string[]>,
    },
    buttonAddText: {
      type: String,
      required: true,
    },
    addValue: {
      type: Function,
      required: true,
    },
    editValue: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const { header, items, buttonAddText, addValue, editValue } = toRefs(props);

    return {
      header,
      items: items || [],
      buttonAddText,
      addValue,
      editValue,
    };
  },
});
</script>
