const worksDigitalContainer = document.querySelector("#works-digital-container"); // Assuming there's a container element with id "works-container"
const worksTraditionalContainer = document.querySelector("#works-traditional-container");
const worksBestWorkContainer = document.querySelector("#best-works-container");
const works3DContainer = document.querySelector("#works-3d-container");

// Array to hold the works data
const worksDataDigital = [
    { id: 1, imageSrc: "images/digital/digitalArt1.jpg", cost: "$10", artist: "Elena Rodriguez" },
    { id: 2, imageSrc: "images/digital/digitalArt2.jpg", cost: "$15", artist: "Alexandre Martin" },
    { id: 3, imageSrc: "images/digital/digitalArt3.jpg", cost: "$20", artist: "Sophia Chen" },
    { id: 4, imageSrc: "images/digital/digitalArt4.jpg", cost: "$25", artist: "Gabriel Johnson" },
    { id: 5, imageSrc: "images/digital/digitalArt5.jpg", cost: "$30", artist: "Isabella Thompson" },
    { id: 6, imageSrc: "images/digital/digitalArt6.jpg", cost: "$35", artist: "Oliver Davis" },
    { id: 7, imageSrc: "images/digital/digitalArt7.jpg", cost: "$40", artist: "Emily Wilson" },
    { id: 8, imageSrc: "images/digital/digitalArt8.jpg", cost: "$45", artist: "Liam Anderson" },
    { id: 9, imageSrc: "images/digital/digitalArt9.jpg", cost: "$50", artist: "Mia Lee" },
    { id: 10, imageSrc: "images/digital/digitalArt10.jpg", cost: "$55", artist: "Noah Garcia" },
    { id: 11, imageSrc: "images/digital/digitalArt11.jpg", cost: "$60", artist: "Ava Martinez" },
    { id: 12, imageSrc: "images/digital/digitalArt3.jpg", cost: "$65", artist: "Benjamin Nguyen" }
];


const worksDataTraditional = [
  { id: 13, imageSrc: "images/traditional/traditionalArt1.jpg", cost: "$10", artist: "Sophie Collins" },
  { id: 14, imageSrc: "images/traditional/traditionalArt2.jpg", cost: "$15", artist: "Oliver Hughes" },
  { id: 15, imageSrc: "images/traditional/traditionalArt3.jpg", cost: "$20", artist: "Emma Turner" },
  { id: 16, imageSrc: "images/traditional/traditionalArt4.jpg", cost: "$25", artist: "Maxwell Campbell" },
  { id: 17, imageSrc: "images/traditional/traditionalArt5.jpg", cost: "$30", artist: "Amelia Roberts" },
  { id: 18, imageSrc: "images/traditional/traditionalArt6.jpg", cost: "$35", artist: "Daniel Mitchell" },
  { id: 19, imageSrc: "images/traditional/traditionalArt14.jpg", cost: "$40", artist: "Grace Davis" },
  { id: 20, imageSrc: "images/traditional/traditionalArt8.jpg", cost: "$45", artist: "Jacob Adams" },
  { id: 21, imageSrc: "images/traditional/traditionalArt9.jpg", cost: "$50", artist: "Sophia Nelson" },
  { id: 22, imageSrc: "images/traditional/traditionalArt10.jpg", cost: "$55", artist: "Ethan Baker" },
  { id: 23, imageSrc: "images/traditional/traditionalArt11.jpg", cost: "$60", artist: "Isabella Hall" },
  { id: 24, imageSrc: "images/traditional/traditionalArt12.jpg", cost: "$65", artist: "Samuel Reed" }
];


const worksData1 = [
  { id: 25, imageSrc: "images/best_works/best_work1.jpg", artist: "John Smith", cost: "$100" },
  { id: 27, imageSrc: "images/best_works/best_work2.jpg", artist: "Emily Johnson", cost: "$200" },
  { id: 26, imageSrc: "images/best_works/best_work9.jpg", artist: "Michael Davis", cost: "$300" },
  { id: 28, imageSrc: "images/best_works/best_work4.jpg", artist: "Sarah Thompson", cost: "$400" },
  { id: 29, imageSrc: "images/best_works/best_work5.jpg", artist: "David Wilson", cost: "$500" },
  { id: 30, imageSrc: "images/best_works/best_work6.jpg", artist: "Olivia Taylor", cost: "$500" },
  { id: 31, imageSrc: "images/best_works/best_work7.jpg", artist: "James Anderson", cost: "$500" },
  { id: 32, imageSrc: "images/best_works/best_work8.jpg", artist: "Sophia Clark", cost: "$500" }
];

const worksData3D = [
  { id: 33, imageSrc: "images/3d/3dArt1.jpg", artist: "John Smith", cost: "$100" },
  { id: 34, imageSrc: "images/best_works/best_work2.jpg", artist: "Emily Johnson", cost: "$200" },
  { id: 35, imageSrc: "images/best_works/best_work9.jpg", artist: "Michael Davis", cost: "$300" },
  { id: 36, imageSrc: "images/best_works/best_work4.jpg", artist: "Sarah Thompson", cost: "$400" },
  { id: 37, imageSrc: "images/best_works/best_work5.jpg", artist: "David Wilson", cost: "$500" },
  { id: 38, imageSrc: "images/best_works/best_work6.jpg", artist: "Olivia Taylor", cost: "$500" },
  { id: 39, imageSrc: "images/best_works/best_work7.jpg", artist: "James Anderson", cost: "$500" },
  { id: 40, imageSrc: "images/best_works/best_work8.jpg", artist: "Sophia Clark", cost: "$500" }
];


// Array to store the cart items
let cartItems = [];

    // Function to add an item to the cart
function addToCart(id) {
  const worksData = [
    ...worksDataDigital,
    ...worksDataTraditional,
    ...worksData1,
    ...worksData3D 

  ];

  const product = worksData.find((item) => item.id === id);
  if (product) {
    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    updateCart();
  }
}

function updateCartCount(cartItems) {
  const cartCountElement = document.getElementById('cartCount');
  const cartCount = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  cartCountElement.textContent = cartCount.toString();
}


function updateCart() {
  const cartCountElement = document.getElementById('cartCount');
  

  const totalProductCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  cartCountElement.textContent = totalProductCount;

  // Store cart data in localStorage
  localStorage.setItem('cartItemsMain', JSON.stringify(cartItems));
  updateCartCount(cartItems);
}


    // Function to remove an item from the cart
function removeFromCart(id) {
      const itemIndex = cartItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const item = cartItems[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          cartItems.splice(itemIndex, 1);
        }
        updateCart();
      }
}

// Generate the HTML code for the works using map
const worksDigitalHTML = worksDataDigital
  .map(
    (work) => `
    <div class="wrapper_works_digital">
        <div class="image_work_digital">
            <img src="${work.imageSrc}" alt="">
        </div>
        <div class="bottom_artist_digital">
            <p>Artist: ${work.artist}</p>
            <p>Cost: ${work.cost}</p>
            <button onclick="addToCart(${work.id})">Add to Cart</button>
        </div>
    </div>
  `
  )
  .join("");

// Append the generated HTML code to the container element
worksDigitalContainer.innerHTML = worksDigitalHTML;


// Generate the HTML code for the works using map
const worksTraditionalHTML = worksDataTraditional
  .map(
    (work) => `
    <div class="wrapper_works_traditional">
        <div class="image_work_traditional">
            <img src="${work.imageSrc}" alt="">
        </div>
        <div class="bottom_artist_traditional">
            <p>Artist: ${work.artist}</p>
            <p>Cost: ${work.cost}</p>
            <div className="row_button_digital">
                <button onclick="addToCart(${work.id})">Add to Cart</button>
            </div>
        </div>
    </div>
  `
  )
  .join("");

// Append the generated HTML code to the container element
worksTraditionalContainer.innerHTML = worksTraditionalHTML;






  // Generate the HTML code based on the random works data
  const bestWorksHTML = worksData1.map((work )=> 
    `
      <div class="wrapper_works">
        <div class="image_work">
          <img src="${work.imageSrc}" alt="">
        </div>
        <div class="bottom_artist">
          <p>${work.artist}</p>
          <p>${work.cost}</p>
            <div class="row_button_best">
                <button onclick="addToCart(${work.id})">Add to Cart</button>
            </div>    
        </div>
      </div>
      `
  ) .join("");
  
  // Apply the HTML code to the container
  
  worksBestWorkContainer.innerHTML = bestWorksHTML;



//  3D
// Generate the HTML code for the works using map
const works3DHTML = worksData3D.map(
    (work1) => `
    <div class="wrapper_works_3D">
        <div class="image_work_3D">
            <img src="${work1.imageSrc}" alt="">
        </div>
        <div class="bottom_artist_3D">
            <p>Artist: ${work1.artist}</p>
            <p>Cost: ${work1.cost}</p>
            <div className="row_button_3D">
                
                <button onclick="addToCart(${work1.id})" >Add to Cart</button>
            </div>
        </div>
    </div>
  `
  )
  .join("");

// Append the generated HTML code to the container element
works3DContainer.innerHTML = works3DHTML;









// Check if cart data exists in localStorage and load it into the cartItems array
const storedCartItems = localStorage.getItem('cartItemsMain');
cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];



// Update the cart UI
updateCart();




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
