# 📘 Calculator Microservice

This microservice provides basic arithmetic operations through a REST API using **Node.js** and **Express**. It supports:  
✔️ Addition  
✔️ Subtraction  
✔️ Multiplication  
✔️ Division  

## 📌 Requirements  
Ensure the following are installed:  
- [Node.js](https://nodejs.org/)  
- [Git](https://git-scm.com/)  

## 🚀 Setup & Run  

### Clone Repository  
```sh
git clone https://github.com/<your-username>/sit737-2025-prac4p-alt.git
cd sit737-2025-prac4p-alt
```

### Install Dependencies  
```sh
npm install
```

### Start Server  
```sh
node server.js
```

Microservice will be available at:  
```
http://localhost:4000
```

## 📡 API Endpoints  

| Operation      | Endpoint                    | Example Query        |  
|---------------|----------------------------|----------------------|  
| Addition      | `/sum?a=5&b=3`              | `/sum?a=5&b=3` → `8` |  
| Subtraction   | `/difference?a=10&b=4`      | `/difference?a=10&b=4` → `6` |  
| Multiplication | `/product?a=2&b=3`         | `/product?a=2&b=3` → `6` |  
| Division      | `/quotient?a=10&b=2`        | `/quotient?a=10&b=2` → `5` |  

## ⚠️ Error Handling  
- Invalid input returns:  
  ```json
  { "error": "Invalid input. Provide valid numbers." }
  ```
- Division by zero returns:  
  ```json
  { "error": "Cannot divide by zero." }
  ```

## 📜 Logging  
- Logs stored in `logs/combined.log` & `logs/error.log`  
- To view logs in real-time:  
  ```sh
  tail -f logs/combined.log
  ```
