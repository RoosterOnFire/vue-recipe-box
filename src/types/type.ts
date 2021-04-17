export type RecipeType = {
  name: String;
  ingredients: Array<string>;
  directions: Array<string>;
};

export type RecipeListType = Array<RecipeType>;
