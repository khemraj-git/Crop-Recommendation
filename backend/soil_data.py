import os
import pandas as pd
import requests
import datetime

# -----------------------------
# CONFIG
# -----------------------------
API_KEY = "ba29ac5ebf04302b4ef63ff52f4d799d"

# Ensure CSV path works regardless of current working directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_FILE = os.path.join(BASE_DIR, "data", "Soil_data.csv")

# Load soil dataset
df = pd.read_csv(CSV_FILE)

# Normalize column names
df.columns = df.columns.str.strip().str.lower()

# -----------------------------
# Helper functions
# -----------------------------
def get_weather_and_rainfall(lat, lon):
    """Fetch temperature, humidity, and monthly rainfall (mm/month)."""
    # Current weather
    url_weather = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"
    weather = requests.get(url_weather).json()

    temp = weather.get("main", {}).get("temp", 0)
    humidity = weather.get("main", {}).get("humidity", 0)

    # Monthly rainfall
    total_rain = 0
    today = datetime.date.today()

    for i in range(30):  # last 30 days
        date = today - datetime.timedelta(days=i)
        timestamp = int(datetime.datetime.combine(date, datetime.datetime.min.time()).timestamp())

        url_rain = f"http://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={timestamp}&appid={API_KEY}&units=metric"
        res = requests.get(url_rain).json()

        if "hourly" in res:
            for hour in res["hourly"]:
                # Safely get 1-hour rainfall, default to 0
                rain_hour = hour.get("rain", {}).get("1h", 0)
                total_rain += rain_hour
        else:
            # Warn if no hourly data
            print(f"⚠️ No hourly data for {date}")

    monthly_rainfall = round(total_rain, 2)  # mm/month
    return round(temp, 2), round(humidity, 2), monthly_rainfall

def get_district_data(district_name, lat, lon):
    """Fetch numeric N, P, K (medium), pH (dominant value), temperature, humidity, rainfall (mm/month)."""
    district_row = df[df["district"].str.lower().str.strip() == district_name.lower().strip()]

    if district_row.empty:
        return {"error": f"District '{district_name}' not found in CSV."}

    row = district_row.iloc[0]

    # Numeric medium N, P, K
    N = float(row["n_medium"])
    P = float(row["p_medium"])
    K = float(row["k_medium"])

    # Numeric dominant pH
    pH_values = [float(row["ph_alkaline"]), float(row["ph_acidic"]), float(row["ph_neutral"])]
    pH = max(pH_values)

    temp, humidity, monthly_rainfall = get_weather_and_rainfall(lat, lon)

    return {
        "District": district_name,
        "N (medium)": N,
        "P (medium)": P,
        "K (medium)": K,
        "pH (dominant value)": pH,
        "Temperature (°C)": temp,
        "Humidity (%)": humidity,
        "Rainfall (mm/month)": monthly_rainfall
    }

# -----------------------------
# Example usage
# -----------------------------
if __name__ == "__main__":
    district = "BOKARO"
    latitude = 25.2973  # Mawsynram
    longitude = 91.5827

    data = get_district_data(district, latitude, longitude)
    print(data)