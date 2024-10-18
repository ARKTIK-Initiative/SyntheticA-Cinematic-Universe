
// ARKTIK Stripe Wallet Integration 💳
// Seamless payments for luxury services – where elegance meets technology.

const stripe = Stripe("YOUR_PUBLIC_KEY"); // Replace with your Stripe public key

document.getElementById("pay-btn").addEventListener("click", async () => {
    try {
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{ price: "price_1HX5DwLnvgxK5UUl", quantity: 1 }], // Replace with your price ID
            mode: "payment",
            successUrl: "https://your-site.com/success",  // Replace with your success URL
            cancelUrl: "https://your-site.com/cancel",    // Replace with your cancel URL
        });

        if (error) throw error;

        console.log("✅ Payment initiated successfully.");
    } catch (err) {
        console.error("🚫 Payment failed: ", err);
        alert("Something went wrong. Please try again.");
    }
});
