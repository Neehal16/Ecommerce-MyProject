
import React, { useState } from 'react';

const ProductUpload = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), name, price: parseFloat(price), image: URL.createObjectURL(image) };
    addProduct(newProduct);
    setName('');
    setPrice('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default ProductUpload;
