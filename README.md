# 📡 School Locator API

A simple Node.js + Express backend API to manage school data and calculate distances from the user location using latitude and longitude.

---

## 📦 Features

- ➕ **Add a new school**
- 📍 **Get list of all schools sorted by distance from user**
- ✅ Input validation using `express-validator`
- 🌐 Distance calculation using `geolib`
- 🗄️ MySQL database integration

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MySQL
- Express Validator
- Geolib

---

## 📁 API Endpoints

### POST `/addSchool`

Add a new school to the database.

#### Request Body (JSON)
```
{
  "name": "ABC Public School",
  "address": "123 Main Street, Delhi",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

#### Response
- `201 Created` on success
- `400 Bad Request` if validation fails

---

### GET `/listSchools?latitude=USER_LAT&longitude=USER_LONG`

Returns a list of schools sorted by distance (nearest first) from the provided user coordinates.

#### Query Parameters
- `latitude`: user's current latitude (required)
- `longitude`: user's current longitude (required)

#### Response
```json
[
  {
    "id": 1,
    "name": "ABC Public School",
    "address": "123 Main Street, Delhi",
    "latitude": 28.6139,
    "longitude": 77.2090,
    "distance": 1243 // in meters
  },
  ...
]
```

---

## ⚙️ Database Schema

Table: `schoolsdata`

| Field     | Type          | Description               |
|-----------|---------------|---------------------------|
| id        | SMALLINT (PK) | Auto-incremented ID       |
| name      | VARCHAR(20)   | School name               |
| address   | VARCHAR(100)  | School address            |
| latitude  | FLOAT         | School latitude           |
| longitude | FLOAT         | School longitude          |

---

## 🚀 Deployment

You can deploy this API using:


- [Railway](https://railway.app) (supports Node.js + MySQL directly)

---

## 👨‍💻 Author

Made with ❤️ by MO ABUZAR
