import React, { useState } from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';

const products = [
  { id: 1, name: 'Product 1', category: 'Electronics' },
  { id: 2, name: 'Product 2', category: 'Clothing' },
  { id: 3, name: 'Product 3', category: 'Electronics' },
  { id: 4, name: 'Product 4', category: 'Furniture' },
  // Add more products as needed
];

const categories = ['Electronics', 'Clothing', 'Furniture'];

const App = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  console.log(selectedCategories);
  const filteredProducts = products.filter((product) =>
    selectedCategories.length === 0
      ? true
      : selectedCategories.includes(product.category)
  );

  return (
    <div>
      <h1>Products</h1>
      <MultiSelectDropdown
        options={categories}
        selectedOptions={selectedCategories}
        setSelectedOptions={setSelectedCategories}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
