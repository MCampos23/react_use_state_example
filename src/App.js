import React, { useState  } from 'react';

function App() {
  // Ejemplo más elaborado de uso del hook use_state
  const [items, setItems] = useState([]);
const addItem = () => setItems([...items, { id: items.length, value: Math.random() * 100 }]);
return (<div><button onClick={addItem}>Add Item</button><ul>{items.map(item => <li key={item.id}>{item.value}</li>)}</ul></div>);

}

export default App;
