import React, { useState, useEffect } from 'react'
import { RecipeList, RecipeEdit } from './components/index'
import { sampleRecipes } from './constants/index'
import { v4 as uuidv4 } from 'uuid'

export const RecipeContext = React.createContext()

const App = () => {
  const [recipes, setRecipes] = useState(() => {
    const recipeSaved = localStorage.getItem('recipeKey')
    const initialValue = JSON.parse(recipeSaved)
    return initialValue || sampleRecipes
  })
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(() => {
    localStorage.setItem('recipeKey', JSON.stringify(recipes))
  }, [recipes])

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [{ id: uuidv4(), name: '', amount: '' }]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id, recipe) {
    const newRecipe = [...recipes]
    const index = newRecipe.findIndex(r => r.id === id)
    newRecipe[index] = recipe
    setRecipes(newRecipe)
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      selectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )
}

export default App
