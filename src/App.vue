<script lang="ts">
import { defineComponent } from "vue";
import RecipeList from "@/components/RecipeList.vue";
import RecipeView from "@/components/RecipeView.vue";

export default defineComponent({
  name: "App",
  components: {
    RecipeList,
    RecipeView,
  },
});
</script>

<template>
  <h1 class="header">Recipe box</h1>
  <RecipeList />
  <RecipeView />
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  body {
    @apply h-screen;
  }

  #app {
    @apply max-w-2xl h-full mx-auto flex flex-col gap-y-8 justify-center items-center;
  }

  .header {
    @apply font-serif italic text-6xl;
  }

  .icon {
    @apply h-8 w-8 cursor-pointer;
  }

  .plus-circle-icon {
    @apply mx-auto;
  }

  .default-container {
    @apply container p-2 bg-gray-100 border-2 border-gray-400 rounded shadow-md;
  }
}
</style>


