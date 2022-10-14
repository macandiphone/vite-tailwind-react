import React, { useContext } from 'react'
import { RecipeContext } from '../App'
import IngredientList from './IngredientList'

const Recipe = props => {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)
  const { id, name, cookTime, servings, instructions, ingredients } = props

  return (
    <div className="p-[20px] bp-[40px] border-b border-black last:border-b-0 last:pb-[10px]">
      <div className="flex justify-between mb-[30px] mt-1">
        <h3 className="font-poppins font-bold text-3xl">{name}</h3>
        <div>
          <button
            className="btn-primary"
            onClick={() => handleRecipeSelect(id)}
          >
            Edit
          </button>
          <button className="btn-danger" onClick={() => handleRecipeDelete(id)}>
            Delete
          </button>
        </div>
      </div>

      <div className="row">
        <span className="label">Cook Time:</span>
        <span className="value">{cookTime}</span>
      </div>

      <div className="row">
        <span className="label">Servings:</span>
        <span className="value">{servings}</span>
      </div>

      <div className="row">
        <span className="label">Instructions:</span>
        <div className="value mt-[10px] ml-[20px] whitespace-pre-wrap">
          {instructions}
        </div>
      </div>

      <div className="row">
        <span className="label">Ingredients:</span>
        <div className="value mt-[10px] ml-[20px]">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}

export default Recipe
