# React Flow Pipeline Builder

A node-based, drag-and-drop pipeline builder built with **React**, **React Flow**, and a lightweight **FastAPI** backend.

This project demonstrates frontend architecture, reusable component design, dynamic UI behavior, and basic backend validation.

---

## Features

### Node Abstraction
- Implemented a reusable base node structure to reduce duplicated code
- Existing nodes (Input, Text, LLM, Output) follow a shared pattern
- Added five demo nodes (Math, Delay, Condition, Logger, API) to demonstrate scalability

### Dynamic Text Node
- Text node auto-resizes based on content
- Supports variable placeholders using `{{variableName}}`
- Automatically generates input handles for detected variables

### Pipeline Validation
- Frontend sends pipeline data (nodes & edges) to backend
- Backend calculates:
  - Number of nodes
  - Number of edges
  - Whether the pipeline forms a DAG (Directed Acyclic Graph)
- Results are shown to the user via an alert

### Styling
- Clean, consistent UI styling across nodes and toolbar
- Improved usability and visual clarity

---

## Tech Stack

- **Frontend:** React, React Flow, Zustand
- **Backend:** Python, FastAPI
- **Tooling:** Create React App, GitHub

---

## Running the Project

### Frontend
```bash
cd frontend
npm install
npm start

### Backend
```bash
cd backend
uvicorn main:app --reload

### Note
This project was built as part of a technical assessment and is intended to demonstrate frontend problem-solving, component abstraction, and system design skills. 

