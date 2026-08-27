import pickle
import pandas as pd

# Load trained model
with open("model/model.pkl", "rb") as file:
    model = pickle.load(file)

# Get user input
study_hours = float(input("Enter study hours: "))
attendance = float(input("Enter attendance percentage: "))
previous_score = float(input("Enter previous exam score: "))
assignment_score = float(input("Enter assignment score: "))
sleep_hours = float(input("Enter sleep hours: "))

# Create input DataFrame
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

# Make prediction
prediction = model.predict(input_data)

print("\nPredicted Final Score:", round(prediction[0], 2))