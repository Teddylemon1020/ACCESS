document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const posContainer = document.getElementById('pos-container');
    const loginError = document.getElementById('login-error');
  
    const validUsername = 'admin';
    const validPassword = 'password';
  
    // Login Form Submission
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  //add access to verify user

      if (username === validUsername && password === validPassword) {
        // Show POS and hide login
        loginContainer.style.display = 'none';
        posContainer.style.display = 'block';
      } else {
        loginError.textContent = 'Invalid username or password';
      }
    });
  
    const productList = document.getElementById('products');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const clearCartButton = document.getElementById('clear-cart');
    let total = 0;
  
    // Add products to the cart
    productList.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        const productName = e.target.getAttribute('data-name');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));
  
        // Add item to the cart
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
        cartItems.appendChild(cartItem);
  
        // Update total price
        total += productPrice;
        totalElement.textContent = total.toFixed(2);
      }
    });
  
    // Clear the cart
    clearCartButton.addEventListener('click', () => {
      cartItems.innerHTML = '';
      total = 0;
      totalElement.textContent = total.toFixed(2);
    });
  });
  

  //add delivery system
//add design to system

  let admin_access;
  let cashier_access;

  function allowUser(){
    /*button.onclick => (admin_access){
    ()}; */

  }


  //implement on data for sales
  function Administer(access_level){
    if (access_level = admin_access ){
        allowUser();

    }else if (access_level = !admin_access){
        console.log("no permission");
    } else{
        return;
    }

  }

  function newUser(username, password) {
    // Check username length
    if (username.length >= 6) {
        // Assuming 'database' is an array of existing usernames
        if (database.includes(username)) {
            console.log("Username already taken");
            return false;
        } else {
            console.log("Username is valid");
        }
    } else {
        console.log("Invalid username");
        return false;
    }

    // Check password length and pattern
    if (password.length <= 8) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8}$/;
        if (passwordRegex.test(password)) {
            console.log("Password is valid");
            return true;
        } else {
            console.log("Invalid password");
            return false;
        }
    } else {
        console.log("Invalid password length");
        return false;
    }
}

// Example database of usernames
const database = ["user1", "testUser", "admin"];




document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll('.menu-item');
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  let total = 0;

  menuItems.forEach(item => {
    const addToCartButton = item.querySelector('.add-to-cart');
    
    addToCartButton.addEventListener('click', () => {
      const name = item.getAttribute('data-name');
      const price = parseFloat(item.getAttribute('data-price'));

      // Add to cart
      const cartItem = document.createElement('li');
      cartItem.textContent = `${name} - $${price.toFixed(2)}`;
      cartItems.appendChild(cartItem);

      // Update total
      total += price;
      totalElement.textContent = total.toFixed(2);
    });
  });
});


function toggleMenu() {
  var sideMenu = document.querySelector('.side-menu');
  var mainContent = document.querySelector('.main-content');
  
  sideMenu.classList.toggle('hide');
  mainContent.classList.toggle('expanded');
}


const inventory = {
  "ADOSILOG": { price: 8.99, stock: 10 },
  "BANGSILOG": { price: 5.99, stock: 15 },
  "CHICKSILOG": { price: 5.99, stock: 8 },
  "CORNSILOG": { price: 5.99, stock: 12 },
  "DANGSILOG": { price: 5.99, stock: 9 },
  "HOTSILOG": { price: 5.99, stock: 20 },
  "LIEMPOSILOG": { price: 5.99, stock: 6 },
  "LONGSILOG": { price: 5.99, stock: 13 },
  "RIBSILOG": { price: 5.99, stock: 7 },
  "SISIGSILOG": { price: 5.99, stock: 10 },
  "SPAMSILOG": { price: 5.99, stock: 11 },
  "TAPSILOG": { price: 5.99, stock: 5 },
  "TOCILOG": { price: 5.99, stock: 8 }
};

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll('.menu-item');
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  let total = 0;

  menuItems.forEach(item => {
    const addToCartButton = item.querySelector('.add-to-cart');

    addToCartButton.addEventListener('click', () => {
      const itemName = item.getAttribute('data-name');
      const itemPrice = parseFloat(item.getAttribute('data-price'));

      if (inventory[itemName].stock > 0) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
        cartItems.appendChild(cartItem);

        total += itemPrice;
        totalElement.textContent = total.toFixed(2);

        inventory[itemName].stock -= 1;

        const stockSpan = item.querySelector('.stock-count');
        if (stockSpan) {
          stockSpan.textContent = inventory[itemName].stock;
        }

      } else {
        alert(`${itemName} is out of stock!`);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll('.menu-item');
  const cartItems = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  let total = 0;

  menuItems.forEach(item => {
      const addToCartButton = item.querySelector('.add-to-cart');
      const stockElement = item.querySelector('.stock-count');
      let stock = parseInt(item.getAttribute('data-stock'));
      const price = parseFloat(item.getAttribute('data-price'));
      const name = item.getAttribute('data-name');

      // Add to cart functionality
      addToCartButton.addEventListener('click', () => {
          if (stock > 0) {
              const cartItem = document.createElement('li');
              cartItem.textContent = `${name} - $${price.toFixed(2)}`;
              cartItems.appendChild(cartItem);

              total += price;
              totalElement.textContent = total.toFixed(2);

              stock--;
              stockElement.textContent = stock;

              if (stock === 0) {
                  addToCartButton.disabled = true;
              }
          }
      });

      // Add stock functionality
      const addStockButton = item.querySelector('.add-stock');
      addStockButton.addEventListener('click', () => {
          stock++;
          stockElement.textContent = stock;
          addToCartButton.disabled = false; // Enable button if stock is available
      });

      // Subtract stock functionality
      const subtractStockButton = item.querySelector('.subtract-stock');
      subtractStockButton.addEventListener('click', () => {
          if (stock > 0) {
              stock--;
              stockElement.textContent = stock;
              if (stock === 0) {
                  addToCartButton.disabled = true; // Disable button if out of stock
              }
          }
      });
  });
});