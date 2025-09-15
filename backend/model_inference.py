import joblib
import numpy as np

# Load trained model
model = joblib.load("models/crop_model.pkl")

def recommend_all_crops(N, P, K, temperature, humidity, ph, rainfall, threshold=0.1):
    """Recommend all crops with probability above a threshold."""
    input_data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    
    probabilities = model.predict_proba(input_data)[0]
    classes = model.classes_
    
    # Select crops above threshold
    suitable_crops = [(classes[i], probabilities[i]) for i in range(len(classes)) if probabilities[i] >= threshold]
    
    # Sort descending by probability
    suitable_crops.sort(key=lambda x: x[1], reverse=True)
    
    return suitable_crops

# Example test
if __name__ == "__main__":
    crops = recommend_all_crops(80, 40, 40, 25, 70, 6.5, 150, threshold=0.1)
    print("🌱 Crops that can be grown in these conditions:")
    for crop, prob in crops:
        print(f"{crop} (Confidence: {prob:.2f})")
