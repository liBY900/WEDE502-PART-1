// ==========================
// Welcome alert on homepage
// ==========================
window.addEventListener("load", () => {
  if (window.location.href.includes("sneakerhome.html")) {
    alert("Welcome to Sneaker Society!");
  }
});

// ==========================
// Login button click alert
// ==========================
const loginBtn = document.querySelector(".btn-login");
if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default navigation
    alert("Welcome! Please log in to continue.");
    window.location.href = "sneakerlogin.html"; // Redirect to login
  });
}


const heroBtn = document.querySelector(".hero .btn");
if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    alert("Get ready to shop the latest sneakers!");
    // Navigation already handled by href in HTML
  });
}

// ==========================
// Payment form validation
// ==========================
const paymentForm = document.querySelector(".payment-form-box form");
if (paymentForm) {
  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const cardNumber = document.getElementById("card-number").value.trim();
    const cardName = document.getElementById("card-name").value.trim();
    const expiryDate = document.getElementById("expiry-date").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      alert("Please fill in all payment fields.");
      return;
    }

    //  card number format check 
    if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber)) {
      alert("Please enter a valid card number in format xxxx-xxxx-xxxx-xxxx.");
      return;
    }

    alert("Payment successful! Thank you for your purchase.");
    paymentForm.reset();
  });
}

// ==========================
// Contact form submission
// ==========================
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.getElementById("message")?.value.trim();

    if (!message) {
      alert("Please type your message before sending.");
      return;
    }

    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
}

// ==========================
// Add-to-cart buttons on shop page
// ==========================
const addToCartButtons = document.querySelectorAll(".add-to-cart");
if (addToCartButtons.length > 0) {
  addToCartButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const productCard = button.closest(".product-card");
      if (!productCard) return;

      const productName = productCard.querySelector("h3")?.innerText || "Product";
      const productPrice = productCard.querySelector("p")?.innerText || "";

      alert(`${productName} (${productPrice}) added to your cart!`);
    });
  });
}

// ---------------- BUY BUTTON LOGIC ----------------
document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-btn");

  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productCard = button.closest(".product-card");

      const product = {
        name: productCard.querySelector("h3").textContent,
        price: parseInt(productCard.querySelector("p").textContent.replace(/\D/g, "")),
        image: productCard.querySelector("img").src,
      };

      // Save product to localStorage
      localStorage.setItem("selectedProduct", JSON.stringify(product));

      // Redirect to payment page
      window.location.href = "sneakerpayment.html";
    });
  });

  // ---------------- PAYMENT PAGE LOADING ----------------
  const productDisplay = document.getElementById("payment-product");

  if (productDisplay) {
    const item = JSON.parse(localStorage.getItem("selectedProduct"));

    if (!item) {
      productDisplay.innerHTML = `
        <p style="color: white; text-align: center; margin-top: 40px;">
          No product selected. Go back to the <a href="sneakershop.html">Shop</a>.
        </p>
      `;
      return;
    }

    // Inject product into payment page
    productDisplay.innerHTML = `
      <div style="text-align: center; color: white;">
        <img src="${item.image}" style="width: 250px; border-radius: 10px;" />
        <h2>${item.name}</h2>
        <h3>R${item.price}</h3>
      </div>
    `;

    // Update order summary
    const summaryName = document.getElementById("summary-name");
    const summaryPrice = document.getElementById("summary-price");
    const summaryTotal = document.getElementById("summary-total");

    if (summaryName && summaryPrice && summaryTotal) {
      summaryName.innerText = item.name;
      summaryPrice.innerText = "R" + item.price;
      summaryTotal.innerText = "R" + (item.price + 150); // Adding shipping
    }
  }

  // ---------------- PAYMENT FORM ----------------
  const paymentForm = document.getElementById("payment-form");

  if (paymentForm) {
    paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();

      alert("Payment Successful! Thank you for your purchase.");

      // Clear selected product
      localStorage.removeItem("selectedProduct");

      // Redirect to home page
      window.location.href = "sneakerhome.html";
    });
  }
});


