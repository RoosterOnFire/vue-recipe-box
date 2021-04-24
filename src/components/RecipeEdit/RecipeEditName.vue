<template>
  <div class="md:col-span-2">
    <label class="block text-lg font-medium" for="recipeName">Recipe</label>
    <input type="text" name="recipeName" :value="name" @input="$emit('update:name', $event)" />
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { name } = toRefs(props);

    return {
      name,
    };
  },
});
</script>
