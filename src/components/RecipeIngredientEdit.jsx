import React from 'react'

const RecipeIngredientEdit = props => {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
  }

  return (
    <>
      <input
        type="text"
        className="input"
        value={ingredient.name}
        onChange={e => handleChange({ name: e.target.value })}
      />
      <input
        type="text"
        className="input"
        value={ingredient.amount}
        onChange={e => handleChange({ amount: e.target.value })}
      />
      <button
        className="btn-danger__ingredient"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  )
}

export default RecipeIngredientEdit
