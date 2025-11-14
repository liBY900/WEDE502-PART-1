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

// ==========================
// Hero "Shop Now" button interaction
// ==========================
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
    e.preventDefault(); // Prevent default submission

    const cardNumber = document.getElementById("card-number").value.trim();
    const cardName = document.getElementById("card-name").value.trim();
    const expiryDate = document.getElementById("expiry-date").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      alert("Please fill in all payment fields.");
      return;
    }

    // Simple card number format check (basic)
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
// Optional: Add-to-cart buttons on shop page
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
