"use client";
import React from "react";
import { db } from "../../app/db/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import useRecipeStore from "../store";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "recipes"));
        const recipeList = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          console.log("Raw document data:", data);
          return {
            id: doc.id,
            recipeName: data.recipeName || "Unnamed Recipe",
            ingredients: data.ingredients || [],
            instructions: data.instructions || [],
            notes: data.notes || "No notes",
          };
        });
        console.log("Final recipe list:", recipeList);
        setRecipes(recipeList);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          className="bg-slate-100 shadow-md rounded-lg
        p-6 mb-4 text-slate-950 border-2"
          key={recipe.id}
        >
          <h3 className="text-xl font-bold mb-2">{recipe.recipeName}</h3>
          <p className="font-semibold">Ingredients:</p>
          <ul className="list-disc list-inside mb-4">
            {Array.isArray(recipe.ingredients) &&
            recipe.ingredients.length > 0 ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <li>No ingredients listed</li>
            )}
          </ul>
          <p className="">Instructions:</p>
          <ol className="list-decimal list-inside">
            {Array.isArray(recipe.instructions) &&
            recipe.instructions.length > 0 ? (
              recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))
            ) : (
              <li>No instructions provided</li>
            )}
          </ol>
          <p>Notes: {recipe.notes}</p>
          {/* { <pre>{JSON.stringify(recipe, null, 2)}</pre>} */}
        </div>
      ))}
    </div>
  );
}
