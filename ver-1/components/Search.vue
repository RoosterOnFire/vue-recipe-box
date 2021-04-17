<template>
  <CardWithContent>
    <h3 class="has-text-primary-dark">Recipes</h3>
    <div class="block">
      <button class="button" @click="openModal">Add new recipe</button>
    </div>
    <div class="block">
      <input
        class="input"
        type="text"
        placeholder="Search"
        v-model="searchInput"
      />
      <NameList
        id="recipeNamesList"
        :names="searchNames"
        @click="selectRecipe"
      />
    </div>
  </CardWithContent>
</template>

<script>
import CardWithContent from "./CardWithContent";
import NameList from "./NameList";

export default {
  name: "Search",
  components: {
    NameList,
    CardWithContent,
  },
  data() {
    return {
      searchInput: "",
    };
  },
  props: {
    names: Array,
  },
  computed: {
    searchNames() {
      if (this.searchInput !== "") {
        return this.names.filter((name) => name.includes(this.searchInput));
      }

      return this.names;
    },
  },
  methods: {
    selectRecipe(event) {
      this.$emit("selectRecipe", event.target.id);
    },
    openModal() {
      this.$emit("openModal");
    },
  },
};
</script>

<style></style>
