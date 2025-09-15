import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib
import os

# Ensure models directory exists
os.makedirs("models", exist_ok=True)

# Path to CSV (relative to project root)
csv_path = "data/Crop_recommendation.csv"

# Check for file existence
if not os.path.isfile(csv_path):
    raise FileNotFoundError(f"❌ Dataset not found at {csv_path}")

# Load dataset
data = pd.read_csv(csv_path)

# Split features and target
X = data.drop("label", axis=1)
y = data["label"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"✅ Model trained with accuracy: {accuracy:.2f}")

# Save trained model
model_path = "models/crop_model.pkl"
joblib.dump(model, model_path)
print(f"💾 Model saved at {model_path}")
