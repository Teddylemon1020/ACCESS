import React, { useState } from 'react';
import './inventory.css'
import '../style.css';
  
const InventoryItem = ({ name, currentStock, onUpdate }) => {
  const [newStock, setNewStock] = useState('');

  const handleUpdate = () => {
    const parsedStock = parseInt(newStock);
    if (!isNaN(parsedStock) && parsedStock >= 0) {
      onUpdate(name, parsedStock);
      setNewStock(''); // Clear the input after updating
      alert(`Stock for ${name} updated to ${parsedStock}`);
    } else {
      alert('Please enter a valid stock quantity.');
    }
  };

  return (
    <div className="menu-item bg-white p-5 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="mb-2">
        Current Stock: <span>{currentStock}</span>
      </p>
      <input
        type="number"
        min="0"
        className="border rounded-md p-2 mb-2 w-full"
        placeholder="Enter new stock"
        value={newStock}
        onChange={(e) => setNewStock(e.target.value)}
      />
      <button className="update-stock bg-blue-500 text-white rounded-md px-3 py-1" onClick={handleUpdate}>
        Update Stock
      </button>
    </div>
  );
};

const Inventory = () => {
  // Initial stock for the items
  const [items, setItems] = useState({
    EGGS: 10,
    FLOUR: 10,
    OIL: 10,
    CHICKEN: 10,
    HATDOG: 10,
    FISH: 10,
    SUGAR: 10,
    PEPPER: 10,
    GARLIC: 10,
    TOMATO: 10,
  });

  const updateStock = (name, newStock) => {
    setItems((prevItems) => ({
      ...prevItems,
      [name]: newStock,
    }));
  };

  return (
    <div className="bg-gray-100 py-5">
      <button className="menu-toggle" onClick={() => (window.location.href = '/home')}>
        ☰ Menu
      </button>
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-lg p-5">
        <h1 className="text-3xl font-bold text-center mb-5">Inventory Management</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.keys(items).map((itemName) => (
            <InventoryItem key={itemName} name={itemName} currentStock={items[itemName]} onUpdate={updateStock} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
