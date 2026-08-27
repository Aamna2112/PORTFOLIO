import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error
import pickle
import os

# Load the dataset
data = pd.read_csv("data/student_data.csv")

# Select input features
X = data[
    [
        "study_hours",
        "attendance",
        "previous_score",
        "assignment_score",
        "sleep_hours"
    ]
]

# Select the value we want to predict
y = data["final_score"]

# Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Create the model
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Calculate error
error = mean_absolute_error(y_test, predictions)

print("Model trained successfully!")
print("Mean Absolute Error:", error)

# Create model folder
os.makedirs("model", exist_ok=True)

# Save the trained model
with open("model/model.pkl", "wb") as file:
    pickle.dump(model, file)

print("Model saved successfully!")