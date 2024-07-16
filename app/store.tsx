import create from "zustand";

//the interface will define the typing of the object that will be returned by the zustand hook
interface RecipeState {
  recipeName: string;
  ingredients: string;
  instructions: string;
  notes: string;
  updateRecipe: (newRecipe: Partial<RecipeState>) => void;
}

// Create the store
const useRecipeStore = create<RecipeState>((set) => ({
  recipeName: "",
  ingredients: "",
  instructions: "",
  notes: "",
  // Action to update the recipe. It can update any part of the recipe state.
  updateRecipe: (newRecipe) => set((state) => ({ ...state, ...newRecipe })),
}));

const updateRecipeName = () => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  updateRecipe({ recipeName: "New Recipe Name" });
};

export default useRecipeStore;
