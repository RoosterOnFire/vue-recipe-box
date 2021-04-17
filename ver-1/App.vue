<template>
  <div class="hero-body is-justify-content-center">
    <div class="card p-3 minwidth">
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <Header msg="Rescipe Box" />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <Search
              id="NameList"
              :names="recipeNames"
              @selectRecipe="selectRecipe"
              @openModal="toggleModal"
            />
          </div>
          <div class="column">
            <Recipe
              id="Recipe"
              :recipe="selectedRecipe"
              @deleteRecipe="deleteRecipe"
            />
          </div>
        </div>
      </div>
    </div>
    <AddNew
      :isModalActive="isModalActive"
      @addRecipe="addRecipe"
      @closeModal="toggleModal"
    />
  </div>
</template>

<script>
import Header from "./components/Header";
import Search from "./components/Search";
import Recipe from "./components/Recipe";
import AddNew from "./components/AddNew";

export default {
  name: "App",
  components: {
    Header,
    Search,
    Recipe,
    AddNew,
  },
  data() {
    return {
      isModalActive: false,
      selectedRecipe: {
        name: "Example recipe",
        ingredients: ["example ingredient"],
        directions: ["example direction"],
      },
      recipes: [
        {
          name: "RecipeName1",
          ingredients: ["ingredient11"],
          directions: ["directions11"],
        },
        {
          name: "RecipeName2",
          ingredients: ["ingredient21", "ingredient22"],
          directions: ["directions21", "directions22"],
        },
        {
          name: "RecipeName3",
          ingredients: ["ingredient31", "ingredient32", "ingredient33"],
          directions: ["directions31", "directions32", "directions33"],
        },
      ],
      selectedRecipeData: {},
    };
  },
  computed: {
    recipeNames() {
      return this.recipes.map((recipe) => recipe.name);
    },
  },
  methods: {
    selectRecipe(id) {
      this.selectedRecipe = this.recipes[id] || [];
    },
    addRecipe(newRecipe) {
      this.recipes.push(newRecipe);
    },
    toggleModal() {
      this.isModalActive = !this.isModalActive;
    },
    deleteRecipe(toBeDeleted) {
      this.recipes = this.recipes.filter(
        (recipe) => recipe.name !== toBeDeleted.name
      );

      this.selectRecipe(0);
    },
  },
};
</script>
