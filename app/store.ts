import create from "zustand";

// Interface for the recipe
interface Recipe {
  recipeName: string;
  ingredients: string[];
  instructions: string;
  notes: string;
}
//the interface will define the typing of the object that will be returned by the zustand hook
interface RecipeState {
  //array of recipe objects
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  updateRecipe: (recipeIndex: number, newRecipe: Partial<Recipe>) => void;
  updateRecipeName: (recipeIndex: number, newName: string) => void;
}

// Create the store
const useRecipeStore = create<RecipeState>((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  updateRecipe: (recipeIndex, newRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe, index) =>
        index === recipeIndex ? { ...recipe, ...newRecipe } : recipe
      ),
    })),
  updateRecipeName: (recipeIndex, newName) =>
    set((state) => ({
      recipes: state.recipes.map((recipe, index) =>
        index === recipeIndex ? { ...recipe, recipeName: newName } : recipe
      ),
    })),
}));

// new action to update the recipe state
export default useRecipeStore;
