<template>
  <div class="modal" :class="{ 'is-active': isModalActive }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <div class="content">
          <h2>Add new recipe</h2>
          <label>Name</label>
          <input class="input" type="text" v-model="name" />
          <label>Ingredients</label>
          <textarea
            class="input"
            rows="3"
            cols="41"
            v-model="ingredients"
          ></textarea>
          <label>Directions</label>
          <textarea
            class="input"
            rows="3"
            cols="41"
            v-model="directions"
          ></textarea>
          <button class="button" type="button" @click="addRecipe">
            Add
          </button>
          <button class="button" type="button" @click="reset">
            Reset
          </button>
          <button class="button" type="button" @click="close">
            Close
          </button>
        </div>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
export default {
  name: "AddModal",
  data() {
    return {
      name: "",
      ingredients: "",
      directions: "",
    };
  },
  props: {
    isModalActive: Boolean,
  },
  methods: {
    addRecipe() {
      if (this.name !== "") {
        const data = {
          name: this.name,
          ingredients: this.ingredients.split("|"),
          directions: this.directions.split("|"),
        };

        this.reset();

        this.$emit("addRecipe", data);

        return;
      }

      alert("New recipe has no name");
    },
    reset() {
      this.name = "";

      this.ingredients = "";

      this.directions = "";
    },
    close() {
      this.$emit("closeModal");
    },
  },
};
</script>
