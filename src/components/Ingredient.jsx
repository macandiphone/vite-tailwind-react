import React from 'react'

const Ingredient = ({ name, amount }) => {
  return (
    <div className="grid grid-cols-2 gap-y-[5px] gap-x-[40px] justify-start">
      <span>{name}</span>
      <span>{amount}</span>
    </div>
  )
}

export default Ingredient
