# 🎓 Student Performance Predictor

A Machine Learning project that predicts a student's final exam score based on study habits and academic performance.

## 🚀 Features

- Predicts final student score
- Uses Machine Learning
- Simple web interface
- Built with Python and Flask
- Uses student academic data

## 📊 Input Features

The model uses:

- Study Hours
- Attendance
- Previous Exam Score
- Assignment Score
- Sleep Hours

## 🛠️ Technologies Used

- Python
- Pandas
- NumPy
- Scikit-learn
- Flask
- HTML
- CSS

## 🤖 Machine Learning Model

The project uses Linear Regression to predict the final score.

## 📁 Project Structure

```text
student-performance-predictor/
│
├── data/
│   └── student_data.csv
│
├── model/
│   ├── app.py
│   ├── model.pkl
│   └── templates/
│       └── index.html
│
├── train_model.py
├── predict.py
├── requirements.txt
├── README.md
└── .gitignore