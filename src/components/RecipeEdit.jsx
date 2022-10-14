import React, { useContext } from 'react'
import { RecipeContext } from '../App'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { v4 as uuidv4 } from 'uuid'

const RecipeEdit = ({ recipe }) => {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes })
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ ingredients: newIngredients })
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: '',
      amount: ''
    }
    handleChange({ ingredients: [...recipe.ingredients, newIngredient] })
  }

  function handleIngredientDelete(id) {
    handleChange({ ingredients: recipe.ingredients.filter(i => i.id !== id) })
  }

  return (
    <div className="p-[30px] pt-[10px] fixed right-0 top-0 w-1/2 max-h-full overflow-y-auto">
      <div className="text-end">
        <button
          className="text-2xl font-bold"
          onClick={() => handleRecipeSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="grid grid-cols-[auto,1fr] gap-[10px] gap-x-[40px]">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="input"
          value={recipe.name}
          onChange={e => handleChange({ name: e.target.value })}
        />
        <label htmlFor="cookTime" className="label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          className="input"
          value={recipe.cookTime}
          onChange={e => handleChange({ cookTime: e.target.value })}
        />
        <label htmlFor="servings" className="label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          className="input"
          value={recipe.servings}
          onChange={e =>
            handleChange({ servings: parseInt(e.target.value) || '' })
          }
        />
        <label htmlFor="instructions" className="label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="input resize-none h-[200px]"
          value={recipe.instructions}
          onChange={e => handleChange({ instructions: e.target.value })}
        />
      </div>
      <br />
      <label className="label">Ingredients</label>
      <div className="md:grid md:grid-cols-[repeat(3,auto)] grid grid-cols-1 gap-[10px] mt-[10px] ml-[40px]">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </div>
      <div className="text-center">
        <button
          className="btn-primary mt-[20px]"
          onClick={() => handleIngredientAdd()}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  )
}

export default RecipeEdit
