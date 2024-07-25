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
        <div key={recipe.id}>
          <h3>{recipe.recipeName}</h3>
          <p>Ingredients:</p>
          <ul>
            {Array.isArray(recipe.ingredients) &&
            recipe.ingredients.length > 0 ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <li>No ingredients listed</li>
            )}
          </ul>
          <p>Instructions:</p>
          <ol>
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
          <pre>{JSON.stringify(recipe, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
