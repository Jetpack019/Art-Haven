// Array to store the product list
const productList = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
  // Array to store the cart items
  let cartItems = [];
  
  // Function to add an item to the cart
  function addToCart(id) {
    const product = productList.find((item) => item.id === id);
    if (product) {
      cartItems.push(product);
      updateCart();
    }
  }
  
  // Function to update the cart UI
  function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // Clear previous cart items
  
    cartItems.forEach((item) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.textContent = `${item.name} - $${item.price}`;
  
      cartElement.appendChild(cartItem);
    });
  }
  
  // Function to generate the product list UI
  function generateProductList() {
    const productListElement = document.getElementById('productList');
  
    productList.forEach((item) => {
      const product = document.createElement('div');
      product.className = 'product';
      product.innerHTML = `
        <div>${item.name} - $${item.price}</div>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      `;
  
      productListElement.appendChild(product);
    });
  }
  
  // Call the function to generate the product list
  generateProductList();
  