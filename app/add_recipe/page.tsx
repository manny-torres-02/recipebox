"use client";
import React, { useState } from "react";
import useRecipeStore from "../store";
import PreviousMap from "postcss/lib/previous-map";
import { db } from "../../app/db/firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function AddRecipe() {
  // use the zustand store teo extract the recipe fucntion
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // this sets the local state of everything
  // new recipe object will hold th e
  const [newRecipe, setNewRecipe] = useState({
    recipeName: "",
    ingredients: "",
    instructions: "",
    notes: "",
  });

  const addRecipeToFirestore = async (recipe) => {
    try {
      const docRef = await addDoc(collection(db, "recipes"), recipe);
      console.log("document written with ID:", docref.id);
    } catch (e) {
      console.error("error adding document ", e);
    }
  };

  const submitForm = async (event) => {
    // prevents default form submission behavior
    event.preventDefault();
    //takes the state of the new recipe, and then adds this to the current zustand store
    const recipeToAdd = {
      ...newRecipe,
      ingredients: newRecipe.ingredients.split(",").map((item) => item.trim()),
      instructions: newRecipe.instructions
        .split(",")
        .map((item) => item.trim()),
    };
    await addRecipeToFirestore(recipeToAdd);
    addRecipe(recipeToAdd); //

    // Reset form after submission
    setNewRecipe({
      recipeName: "",
      ingredients: [],
      instructions: "",
      notes: "",
    });
  };

  //handles change to the input items
  // assigns the e.target.name and e.target.value through object destructuring
  // for ingredeients input, it checks if the name of the input is an ingredient, thaen turns it into an array split by commas, if it is not an ingredient, it splits the values as is

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({
      ...prev,
      //this is the ingredients input
      [name]: name === "ingredients" ? value.split(",") : value,
    }));
  };

  return (
    <div>
      <p className="text-xl font-bold"> Add a Recipe </p>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Submit a Recipe</h1>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="recipeName"
            >
              Recipe Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="recipeName"
              type="text"
              placeholder="Recipe Name"
              name="recipeName"
              value={newRecipe.recipeName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ingredients"
            >
              Ingredients
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="instructions"
              placeholder="List your ingredients here..."
              rows="6"
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="instructions"
              placeholder="List your instructions here..."
              rows="6"
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="notes"
              name="notes"
              placeholder="Additional notes..."
              rows="2"
              value={newRecipe.notes}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="photo"
            >
              Upload Photo
            </label>
            <input
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              id="photo"
              type="file"
              accept="image/*"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={submitForm}
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
