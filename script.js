// ORDER FORM HANDLER
document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const coffee = document.getElementById("coffee").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const prices = {
        espresso: 3.00,
        latte: 4.00,
        capuccion: 4.50
    };

    if (coffee && quantity) {
        const total = (prices[coffee] * quantity).toFixed(2);
        document.getElementById("ordersummary").innerHTML = `
            <div style="background: #333; padding: 1rem; border-radius: 0.5rem;">
                <p>✅ <strong>${quantity}</strong> ${coffee}(s) ordered.</p>
                <p>Total: <strong>$${total}</strong></p>
            </div>
        `;
    }
});

// CONTACT FORM VALIDATION
document.getElementById("contactform").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert(`☕ Thank you, ${name}! We'll get back to you shortly.`);
        this.reset();
    } else {
        alert("❗ Please fill out all contact fields.");
    }
});

// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// AUTO SLIDER FUNCTIONALITY (IF NOT USING CSS ANIMATION)
const slides = document.querySelectorAll(".slide");
let current = 0;

function autoSlide() {
    slides.forEach((slide, i) => {
        slide.style.display = (i === current) ? "block" : "none";
    });
    current = (current + 1) % slides.length;
}

if (slides.length > 0) {
    autoSlide(); // Initial show
    setInterval(autoSlide, 3000);
}
