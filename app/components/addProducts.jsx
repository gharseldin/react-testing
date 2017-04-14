import React from 'react'

let AddProducts = ({handleClick}) => (
    <div>
        <h2>Add a new product</h2>
        <button onClick={handleClick}>Add</button>
    </div>
)

export default AddProducts