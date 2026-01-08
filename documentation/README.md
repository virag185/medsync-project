# MedSync – Medication Adherence System

## Overview
MedSync is a simple medication adherence system that allows patients to log medication intake and doctors to send reminders.

## Features
- Patient medication tracking
- Log daily dose intake
- Doctor nudge/reminder feature
- Simple frontend dashboard
- Backend API using Express

## Tech Stack
- Node.js
- Express.js
- HTML, JavaScript
- Firebase (mocked due to billing requirement)

## API Endpoints
- GET /api/patients
- POST /api/log-dose
- POST /api/nudge-patient

## Notes
Firestore was mocked due to billing requirements. The backend logic mirrors Firestore structure and can be swapped with Firebase Admin SDK with minimal changes.
