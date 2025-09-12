import joblib
import numpy as np

# Load trained model
model = joblib.load("models/crop_model.pkl")

def recommend_crop(N, P, K, temperature, humidity, ph, rainfall):
    """Recommend a crop based on soil and weather conditions."""
    input_data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    prediction = model.predict(input_data)
    return prediction[0]

# Example test
if __name__ == "__main__":
    crop = recommend_crop(90, 40, 40, 25, 80, 6.5, 200)
    print(f"🌱 Recommended Crop: {crop}")
