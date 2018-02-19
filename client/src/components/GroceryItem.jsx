import React from 'react';

const GroceryItem = (props) => (
  <div>
    {props.item.description} {props.item.quantity}
  </div>
)

export default GroceryItem;