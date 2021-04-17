<template>
  <CardWithContent>
    <h2 class="has-text-primary-dark">Instructions</h2>
    <div v-if="recipe.name === undefined" class="block">
      <h3>No recipe selected</h3>
    </div>
    <div v-else class="block">
      <h3>
        {{ recipe.name }}
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
      </h3>
      <button
        v-if="recipe.name !== undefined"
        class="button is-small is-danger"
        @click="deleteRecipe"
      >
        Delete recipe
      </button>
      <h3>Ingredients</h3>
      <ul>
        <li v-for="(value, key) in recipe.ingredients" :key="key" :id="key">
          {{ value }}
        </li>
      </ul>
      <h3>Directions</h3>
      <ul>
        <li v-for="(value, key) in recipe.directions" :key="key" :id="key">
          {{ value }}
        </li>
      </ul>
    </div>
  </CardWithContent>
</template>

<script>
import CardWithContent from "./CardWithContent";

export default {
  name: "Recipe",
  components: {
    CardWithContent,
  },
  props: {
    recipe: Object,
  },
  methods: {
    deleteRecipe() {
      this.$emit("deleteRecipe", this.recipe);
    },
  },
};
</script>
