export type RecipeType = {
  name: string;
  ingredients: Array<string>;
  directions: Array<string>;
};

export type RecipeListType = Array<RecipeType>;
