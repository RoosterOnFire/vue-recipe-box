import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import RecipeList from '../src/components/RecipeList.vue';
import RecipeView from '../src/components/RecipeView/RecipeView.vue';

describe('Testing App', () => {
  const mountedApp = mount(App);

  test('App header is "Recipe box"', () => {
    const header = mountedApp.get('.app .header');
    expect(header.text()).toBe('Recipe box');
  });

  test('App shows recipe list', () => {
    const mountedRecipeList = mountedApp.findComponent(RecipeList);
    expect(mountedRecipeList.exists()).toBe(true);
  });

  test('App shows recipe view', () => {
    const mountedRecipeView = mountedApp.findComponent(RecipeView);
    expect(mountedRecipeView.exists()).toBe(true);
  });
});

describe('Testing RecipeList', () => {
  const mountedRecipeList = mount(App).findComponent(RecipeList);

  test('Shows default recipes', () => {
    expect(mountedRecipeList.text()).toBe(
      'RecipeName1 RecipeName2 RecipeName3'
    );
  });

  test('Adds new recipe', async () => {
    const addRecipeButton = mountedRecipeList.get('svg.icon.plus-circle-icon');

    await addRecipeButton.trigger('click');

    expect(mountedRecipeList.text()).toBe(
      'RecipeName1 RecipeName2 RecipeName3 Recipe'
    );
  });

  test('Remove new recipe', async () => {
    await mountedRecipeList.find('li:last-child > svg').trigger('click');

    expect(mountedRecipeList.text()).toBe(
      'RecipeName1 RecipeName2 RecipeName3'
    );
  });
});

describe('Testing RecipeView', () => {
  const mountedApp = mount(App);
  const mountedRecipeList = mountedApp.findComponent(RecipeList);
  const mountedRecipeView = mountedApp.findComponent(RecipeView);

  test('Shows no recipe selected', () => {
    expect(mountedRecipeView.text()).toBe('No recipe selected');
  });

  test('Select first recipe', async () => {
    await mountedRecipeList.get('li:first-child').trigger('click');

    expect(mountedRecipeView.get('div > h2').text()).toBe(
      'Recipe: RecipeName1'
    );
  });

  test('Change selected recipe name', async () => {
    const newRecipeName = 'New Recipe Name';
    const endResult = 'Recipe: New Recipe Name';

    await mountedRecipeView.get('div > h2 + svg').trigger('click');

    await mountedRecipeView.get('div > input').setValue(newRecipeName);

    await mountedRecipeView.get('div > input + svg').trigger('click');

    expect(mountedRecipeView.get('div > h2').text()).toBe(endResult);
  });

  test('Delete selected recipe', async () => {
    await mountedRecipeView.get('div > svg:last-child').trigger('click');

    expect(mountedRecipeView.get('div > h2').text()).toBe('No recipe selected');
  });
});
