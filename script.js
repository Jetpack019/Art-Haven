const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
var search_items = [
  { name: "Samantha Johnson", description: "Abstract paintings with vibrant colors." },
  { name: "Marcus Thompson", description: "Realistic portraits capturing human emotions." },
  { name: "Emily Rodriguez", description: "Sculptures using recycled materials." },
  { name: "David Lee", description: "Landscapes inspired by nature's beauty." },
  { name: "Olivia Chen", description: "Mixed media artwork exploring cultural identity." }
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
  
  

  function showSuggestions() {
    var query = document.getElementById("searchInput").value.toLowerCase();
    var suggestionsContainer = document.getElementById("suggestions");
    suggestionsContainer.innerHTML = ""; // Clear previous suggestions
  
    if (query) {
      var matchingItems = getMatchingItems(query);
  
      if (matchingItems.length > 0) {
        // Display the matching items as suggestions
        var firstLetter = query.charAt(0); // Get the first letter of the search query
  
        for (var i = 0; i < matchingItems.length; i++) {
          var itemName = matchingItems[i].name.toLowerCase();
          if (itemName.startsWith(firstLetter)) {
            var suggestionItem = document.createElement("div");
            suggestionItem.className = "suggestion-item";
            suggestionItem.textContent = matchingItems[i].name;
            suggestionItem.addEventListener("click", function (event) {
              // Set the clicked suggestion as the search query
              var clickedSuggestion = event.target.textContent;
              document.getElementById("searchInput").value = clickedSuggestion;
              searchItem(); // Perform the search for the clicked suggestion
              suggestionsContainer.innerHTML = ""; // Clear suggestions after selecting one
            });
            suggestionsContainer.appendChild(suggestionItem);
          }
        }
      } else {
        suggestionsContainer.innerHTML = "<div class='suggestion-item'>No suggestions found!</div>";
      }
    }
  }
  
  function searchItem() {
    var query = document.getElementById("searchInput").value;
    var searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous search results
  
    if (query) {
      var matchingItems = searchWithinPage(query);
  
      if (matchingItems.length > 0) {
        // Display the matching items on the page
        for (var i = 0; i < matchingItems.length; i++) {
          var searchResultItem = document.createElement("div");
          searchResultItem.className = "search-result-item";
          searchResultItem.innerHTML = "<h3>" + matchingItems[i].name + "</h3>" +
            "<p>" + matchingItems[i].description + "</p>";
          searchResultsContainer.appendChild(searchResultItem);
        }
      } else {
        var searchResultItem = document.createElement("div");
        searchResultItem.className = "search-result-item";
        searchResultItem.textContent = "No matching items found!";
        searchResultsContainer.appendChild(searchResultItem);
      }
    }
  }
  
  
function getMatchingItems(query) {
  // Find items that match the query
  return search_items.filter(function (item) {
    return (
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });
}

function searchWithinPage(query) {
  // Logic to search for the item within the page
  // Modify this function based on your specific requirements and page structure

  var matchingItems = [];

  // Perform the search by iterating over the items and checking if the query matches the name or description
  for (var i = 0; i < search_items.length; i++) {
    if (
      search_items[i].name.toLowerCase().includes(query.toLowerCase()) ||
      search_items[i].description.toLowerCase().includes(query.toLowerCase())
    ) {
      matchingItems.push(search_items[i]);
    }
  }

  return matchingItems; // Return matching items
}





// Image Slider
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);



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
