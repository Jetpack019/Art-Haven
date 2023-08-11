// Function to parse URL parameters
function getQueryParams() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cartData = urlParams.get('cart');
    return JSON.parse(cartData);
  }
  
  // Function to display the cart items on the cart page
  function displayCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    const cartData = getQueryParams();
  
    if (cartData && Array.isArray(cartData)) {
      cartData.forEach((item) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price}`;
  
        cartItemsElement.appendChild(cartItem);
      });
    } else {
      cartItemsElement.textContent = 'No items in the cart.';
    }
  }
  
  // Call the function to display the cart items on the cart page
  displayCartItems();
  