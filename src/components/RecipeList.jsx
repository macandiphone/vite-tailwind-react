import React, { useContext } from 'react'
import { RecipeContext } from '../App'
import Recipe from './Recipe'

const RecipeList = ({ recipes }) => {
  const { handleRecipeAdd } = useContext(RecipeContext)

  return (
    <div className="border-r border-black min-h-screen w-1/2">
      <div>
        {recipes.map(recipe => {
          return <Recipe key={recipe.id} {...recipe} />
        })}
      </div>
      <div className="text-center pt-[30px] pb-[30px]">
        <button className="btn-primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeList
