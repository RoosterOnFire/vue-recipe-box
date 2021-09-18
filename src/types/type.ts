export type Recipe = {
  name: string;
  ingredients: Array<string>;
  directions: Array<string>;
};

export type RecipeList = Array<Recipe>;
