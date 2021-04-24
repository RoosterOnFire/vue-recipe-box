<template>
  <div class="flex space-x-3">
    <template v-if="mode">
      <label for="recipeName">Recipe:</label>
      <input
        type="text"
        name="recipeName"
        ref="recipeNameInput"
        :value="name"
        @input="updateName"
      />
    </template>
    <h2 v-else class="text-3xl">Recipe: {{ name }}</h2>
    <slot />
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
    mode: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { emit }) {
    const { name, mode } = toRefs(props);

    function updateName(event: Event) {
      event &&
        event.target &&
        emit('update:name', (event.target as HTMLInputElement).value);
    }

    return {
      name,
      mode,
      updateName,
    };
  },
});
</script>
