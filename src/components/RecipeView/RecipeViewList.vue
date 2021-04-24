<template>
  <div>
    <h3>{{ header }}</h3>
    <ul class="list-disc list-inside">
      <li class="pl-4" v-for="(value, index) in items" :key="index">{{ value }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue';

export default defineComponent({
  props: {
    header: {
      type: String,
      required: false,
    },
    items: {
      type: Array as PropType<string[]>,
    },
  },
  setup(props) {
    const { header, items } = toRefs(props);

    return {
      header,
      items: items || [],
    };
  },
});
</script>
