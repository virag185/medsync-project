// server.js

const express = require("express");
const cors = require("cors");

const { patients, logs, notifications } = require("./mockDb");


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// Temporary route to view patients (for testing)
app.get("/api/patients", (req, res) => {
  res.json(patients);
});
// Endpoint B: Doctor nudge patient
app.post("/api/nudge-patient", (req, res) => {
  const { patient_id } = req.body;

  if (!patient_id) {
    return res.status(400).json({ error: "patient_id is required" });
  }

  const patient = patients[patient_id];

  if (!patient) {
    return res.status(404).json({ error: "Patient not found" });
  }

  notifications.push({
    patient_id,
    message: "Doctor reminder sent",
    timestamp: new Date().toISOString(),
  });

  return res.json({
    message: "Patient nudged successfully",
  });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Endpoint A: Log dose taken
app.post("/api/log-dose", (req, res) => {
  const { patient_id } = req.body;

  // Validate input
  if (!patient_id) {
    return res.status(400).json({ error: "patient_id is required" });
  }

  const patient = patients[patient_id];

  // Check if patient exists
  if (!patient) {
    return res.status(404).json({ error: "Patient not found" });
  }

  // Update patient data
  patient.pills_left -= patient.daily_dosage;
  patient.status = "Taken";
  patient.last_taken_date = new Date().toISOString();

  // Add log entry
  logs.push({
    patient_id,
    action: "Taken",
    timestamp: new Date().toISOString(),
  });

  return res.json({
    message: "Dose logged successfully",
    patient,
  });
});
