
// ARKTIK Appointment Booking 🗓️
// Schedule excellence – powered by Firebase and designed for luxury.

// Initialize Firebase with your configuration (replace placeholders with your Firebase credentials)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);

document.getElementById("booking-form").addEventListener("submit", (e) => {
    e.preventDefault();  // Prevent the default form submission

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Push the booking to the Firebase database
    firebase.database().ref("appointments").push({
        date: date,
        time: time,
    }).then(() => {
        alert("🎉 Your appointment is confirmed. We look forward to seeing you!");
    }).catch((error) => {
        console.error("🚫 Error booking appointment: ", error);
        alert("Something went wrong. Please try again.");
    });
});
