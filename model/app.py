from flask import Flask, render_template, request
import pickle
import pandas as pd

app = Flask(__name__)

# Load model
with open("model/model.pkl", "rb") as file:
    model = pickle.load(file)

@app.route("/", methods=["GET", "POST"])
def home():

    prediction = None

    if request.method == "POST":

        study_hours = float(request.form["study_hours"])
        attendance = float(request.form["attendance"])
        previous_score = float(request.form["previous_score"])
        assignment_score = float(request.form["assignment_score"])
        sleep_hours = float(request.form["sleep_hours"])

        input_data = pd.DataFrame([[
            study_hours,
            attendance,
            previous_score,
            assignment_score,
            sleep_hours
        ]], columns=[
            "study_hours",
            "attendance",
            "previous_score",
            "assignment_score",
            "sleep_hours"
        ])

        result = model.predict(input_data)

        prediction = round(result[0], 2)

    return render_template(
        "index.html",
        prediction=prediction
    )


if __name__ == "__main__":
    app.run(debug=True)