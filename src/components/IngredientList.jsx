import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} {...ingredient} />
      ))}
    </div>
  )
}

export default IngredientList
