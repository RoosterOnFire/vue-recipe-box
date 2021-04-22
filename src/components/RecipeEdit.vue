<template>
  <teleport to="body">
    <div class="fixed inset-0 z-10 flex items-center justify-center bg-gray-50 bg-opacity-50" @click.self="close">
      <div class="grid md:grid-cols-2 justify-items-center gap-5 p-4 bg-gray-300 border border-gray-900">
        <XIcon class="h-8 w-8 md:col-span-2 justify-self-end cursor-pointer" @click="close" />
        <h1 class="md:col-span-2 text-4xl font-semibold">Edit recipe</h1>
        <div class="md:col-span-2">
          <label class="block text-lg font-medium" for="recipeName">Recipe</label>
          <input type="text" name="recipeName" v-model="recipe.name" />
        </div>
        <div>
          <h2 class="text-lg">Ingredients</h2>
          <div class="list-item list-none" v-for="(ingredient, index) in recipe.ingredients" :key="index">
            <input type="text" :value="ingredient" @input.self="updateIngredients(index, $event)" />
            <TrashIngredient :index="index" />
          </div>
          <button type="button" @click="addIngredient">Add ingredient</button>
        </div>
        <div>
          <h2 class="text-lg">Directions</h2>
          <div class="list-item list-none" v-for="(direction, index) in recipe.directions" :key="index">
            <input type="text" :value="direction" @input.self="updateDirection(index, $event)" />
            <TrashDirection :index="index" />
          </div>
          <button type="button" @click="addDirection">Add direction</button>
        </div>
        <button class="md:col-span-2" type="button" @click="close">Close</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { XIcon } from "@heroicons/vue/solid";
import TrashRecipe from "@component/Trash/TrashRecipe.vue";
import TrashIngredient from "@component/Trash/TrashIngredient.vue";
import TrashDirection from "@component/Trash/TrashDirection.vue";
import { RecipeType } from "@type";
import useRecipes from "../composables/useRecipes";

export default defineComponent({
  components: {
    TrashRecipe,
    TrashIngredient,
    TrashDirection,
    XIcon,
  },
  props: {
    recipe: {
      type: Object as PropType<RecipeType>,
      required: true,
    },
  },
  emits: ["updateRecipe", "close"],
  setup(props, context) {
    const { recipe } = toRefs(props);

    function close() {
      context.emit("close");
    }

    function updateRecipe(action: "ingredients" | "directions", key: number, target: EventTarget | null) {
      target && context.emit("updateRecipe", action, key, (target as HTMLInputElement).value);
    }

    const { addIngredient, addDirection } = useRecipes();

    function updateIngredients(key: number, event: Event) {
      updateRecipe("ingredients", key, event.target);
    }

    function updateDirection(key: number, event: Event) {
      updateRecipe("directions", key, event.target);
    }

    return {
      recipe,
      close,
      addIngredient,
      addDirection,
      updateIngredients,
      updateDirection,
    };
  },
});
</script>
