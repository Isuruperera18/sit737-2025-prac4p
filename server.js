const express = require('express');
const winston = require('winston');

const app = express();
const PORT = 4000;

// Configure Winston Logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calc-service' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

// Function to validate input
function isValidNumber(value) {
    return !isNaN(value) && value !== null && value !== '';
}

// Addition
app.get('/sum', (req, res) => {
    const { a, b } = req.query;
    if (!isValidNumber(a) || !isValidNumber(b)) {
        logger.error("Invalid input provided for addition");
        return res.status(400).json({ error: "Invalid input. Provide valid numbers." });
    }
    const result = parseFloat(a) + parseFloat(b);
    logger.info(`Addition requested: ${a} + ${b} = ${result}`);
    res.json({ operation: "addition", result });
});

// Subtraction
app.get('/difference', (req, res) => {
    const { a, b } = req.query;
    if (!isValidNumber(a) || !isValidNumber(b)) {
        logger.error("Invalid input provided for subtraction");
        return res.status(400).json({ error: "Invalid input. Provide valid numbers." });
    }
    const result = parseFloat(a) - parseFloat(b);
    logger.info(`Subtraction requested: ${a} - ${b} = ${result}`);
    res.json({ operation: "subtraction", result });
});

// Multiplication
app.get('/product', (req, res) => {
    const { a, b } = req.query;
    if (!isValidNumber(a) || !isValidNumber(b)) {
        logger.error("Invalid input provided for multiplication");
        return res.status(400).json({ error: "Invalid input. Provide valid numbers." });
    }
    const result = parseFloat(a) * parseFloat(b);
    logger.info(`Multiplication requested: ${a} * ${b} = ${result}`);
    res.json({ operation: "multiplication", result });
});

// Division
app.get('/quotient', (req, res) => {
    const { a, b } = req.query;
    if (!isValidNumber(a) || !isValidNumber(b)) {
        logger.error("Invalid input provided for division");
        return res.status(400).json({ error: "Invalid input. Provide valid numbers." });
    }
    if (parseFloat(b) === 0) {
        logger.error("Attempted division by zero");
        return res.status(400).json({ error: "Cannot divide by zero." });
    }
    const result = parseFloat(a) / parseFloat(b);
    logger.info(`Division requested: ${a} / ${b} = ${result}`);
    res.json({ operation: "division", result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Calculator Microservice is running on port ${PORT}`);
});
