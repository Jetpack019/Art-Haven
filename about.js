
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

var search_items = [
  { name: "Apple", description: "A fruit with a crisp texture and a sweet flavor." },
  { name: "Around", description: "A fruit with a crisp texture and a sweet flavor." },
  { name: "Banana", description: "A curved yellow fruit with a soft flesh." },
  { name: "Orange", description: "A round citrus fruit with a juicy pulp." },
  { name: "Strawberry", description: "A small red fruit with a sweet and tangy taste." }
];

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    
    // Add the menu (hamburger) icon
    toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    menu.classList.add("active");
    
    // Add the close (x) icon
    toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
  }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}
/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);
  
  

// Shop Cart
// Only code for the counter of cart
// Retrieve cart data from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItemsMain'));

// Function to generate the cart items UI
function generateCartItems(cartItems) {
  // ... (code to generate cart items)
}

function updateCartCount(cartItems) {
  const cartCountElement = document.getElementById('cartCount');
  const cartCount = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  cartCountElement.textContent = cartCount.toString();
}

// Function to update the cart
function updateCart() {
  // ... (code to update cartItems)

  // Call the function to update the cart count
  updateCartCount(cartItems);
}

// Call the function to generate the cart items
generateCartItems(cartItems);

// Call the function to update the cart count
updateCartCount(cartItems);


// For animation scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);