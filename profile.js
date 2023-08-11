const profileImageInput = document.getElementById('profile-picture-input');
const postForm = document.getElementById('post-form');
const postList = document.getElementById('post-list');
const postImageInput = document.getElementById('post-image-input');

profileImageInput.addEventListener('change', function () {
  const profileImage = this.files[0];
  const profileImageElement = document.getElementById('profile-image');
  profileImageElement.src = URL.createObjectURL(profileImage);
  saveProfileImage(profileImage);
});

postForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const postContent = document.getElementById('post-content').value;
  const postImage = postImageInput.files[0];
  const post = document.createElement('div');
  post.className = 'post';

  if (postContent.trim() !== '') {
    const postContentDiv = document.createElement('div');
    postContentDiv.className = 'post-content';
    postContentDiv.textContent = postContent;
    post.appendChild(postContentDiv);
  }

  if (postImage) {
    const postImageElement = document.createElement('img');
    postImageElement.className = 'post-image';
    postImageElement.src = URL.createObjectURL(postImage);
    postImageElement.alt = 'Post Image';
    post.appendChild(postImageElement);
  }

  const postActions = document.createElement('div');
  postActions.className = 'post-actions';

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';
  deleteButton.addEventListener('click', function () {
    post.remove();
    savePosts();
  });
  postActions.appendChild(deleteButton);

  post.appendChild(postActions);

  postList.prepend(post);

  document.getElementById('post-content').value = '';
  postImageInput.value = null;

  savePosts();
});

// Load saved posts from localStorage
window.addEventListener('DOMContentLoaded', loadPosts);

// Save posts to localStorage
function savePosts() {
  const posts = postList.innerHTML;
  localStorage.setItem('posts1', posts);
}

// Load posts from localStorage
function loadPosts() {
  if (localStorage.getItem('posts1')) {
    postList.innerHTML = localStorage.getItem('posts1');
  }
}

// Save profile image to localStorage
function saveProfileImage(profileImage) {
  const reader = new FileReader();
  reader.onload = function () {
    localStorage.setItem('profileImage', reader.result);
  };
  reader.readAsDataURL(profileImage);
}

// Load profile image from localStorage
function loadProfileImage() {
  const profileImage = localStorage.getItem('profileImage');
  if (profileImage) {
    document.getElementById('profile-image').src = profileImage;
  }
}

// Initial load of saved posts and profile image
loadPosts();
loadProfileImage();

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


// Just use this to delete use Storage
// const deleteStorageButton = document.getElementById('delete-storage-button');

// deleteStorageButton.addEventListener('click', function () {
//   localStorage.clear();

// });

// // Call the loadProfileImage function to update the profile image when the page loads
// window.addEventListener('DOMContentLoaded', loadProfileImage);
