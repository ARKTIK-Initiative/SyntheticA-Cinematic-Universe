
# ARKTIK Concierge Flask App 🌟
# Elegant service requests – Submit your luxury needs seamlessly.

from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def concierge():
    if request.method == "POST":
        service_type = request.form["service_type"]
        details = request.form["details"]

        # Notify the team with a touch of class.
        print(f"🎩 New Request Received: {service_type} | Details: {details}")
        return "Your request is now in motion. Prepare for excellence. 🚀"

    return render_template("concierge_form.html")

if __name__ == "__main__":
    print("🔮 ARKTIK Concierge is now live – Awaiting your service requests...")
    app.run(debug=True)
