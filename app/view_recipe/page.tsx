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
      const querySnapshot = await getDocs(collection(db, "recipes"));
      const recipeList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecipes(recipeList);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.recipeName}</h3>
          <p>
            Ingredients:{" "}
            {Array.isArray(recipe.ingredients)
              ? recipe.ingredients.join(", ")
              : "No ingredients listed"}
          </p>
          <p>Instructions: {recipe.instructions}</p>
          <p>Notes: {recipe.notes}</p>
        </div>
      ))}
    </div>
  );
}
