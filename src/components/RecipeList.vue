<template>
  <div class="container">
    <ul>
      <li v-for="row in list" :key="row.name">{{ row.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { RecipeListType } from '@type';

export default defineComponent({
  props: {
    list: Array as PropType<RecipeListType>,
  },
  setup(props) {
    return {
      list: props.list,
    };
  },
});
</script>
