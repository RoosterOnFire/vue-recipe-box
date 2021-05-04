<template>
  <div class="app">
    <h1 class="header">Recipe box</h1>
    <RecipeList />
    <RecipeView />
  </div>
</template>

<style scoped>
.app {
  @apply flex flex-col items-center max-w-2xl h-screen p-4 mx-auto gap-4 text-2xl;
}

.header {
  @apply font-serif italic text-6xl;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import RecipeList from "./components/RecipeList.vue";
import RecipeView from "./components/RecipeView/RecipeView.vue";

export default defineComponent({
  name: "App",
  components: {
    RecipeList,
    RecipeView,
  },
});
</script>
