<template>
  <div class="md:col-span-2">
    <label class="block text-lg font-medium" for="recipeName">Recipe</label>
    <input type="text" name="recipeName" ref="recipeNameInput" :value="name" @input="updateName" />
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, ref } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { name } = toRefs(props);
    const recipeNameInput = ref<HTMLInputElement | null>(null);

    const updateName = () => {
      recipeNameInput.value && emit('update:name', recipeNameInput.value.value);
    };

    return {
      name,
      recipeNameInput,
      updateName,
    };
  },
});
</script>
