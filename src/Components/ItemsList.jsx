import React, { useState } from 'react';

const ItemsList = () => {
  // 2. Array: Manejando una lista de elementos
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems(prevItems => [...prevItems, newItem]);
  };

  const removeItem = (itemToRemove) => {
    setItems(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  return (
    <div>
      {/* Array Example */}
      <h2>Array (List of Items)</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>    
    </div>
  );
};

export default ItemsList;
