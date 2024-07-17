"use client";
import React, { useState } from "react";
import useRecipeStore from "../store";
import PreviousMap from "postcss/lib/previous-map";

export default function AddRecipe() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [newRecipe, setNewRecipe] = useState({
    recipeName: "",
    ingredients: [],
    instructions: "",
    notes: "",
  });

  const submitForm = (event) => {
    event.preventDefault();
    addRecipe(newRecipe);
    // Reset form after submission
    setNewRecipe({
      recipeName: "",
      ingredients: [],
      instructions: "",
      notes: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prev) => ({
      ...prev,
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
