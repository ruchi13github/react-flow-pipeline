# React Flow Pipeline Builder

This project was developed as part of the VectorShift Frontend Technical Assessment.
It demonstrates a drag-and-drop pipeline builder using React and React Flow, with a FastAPI backend
for validating pipeline structure.

## Features
Node Abstraction:

Created a reusable node structure to avoid duplicated code.

Existing nodes (Input, Text, LLM, Output) follow a shared pattern.

Added five demo nodes (Math, Delay, Condition, Logger, API) to demonstrate scalability.

Styling:

Applied a clean, unified UI across the toolbar, nodes, and canvas.

Improved readability and visual consistency.

Text Node Logic:

Text node auto-resizes as more text is entered.

Supports dynamic variables using {{variable}} syntax.

Each variable automatically creates a corresponding input handle.

Example:

Hello {{input}}
Welcome {{user}}

Backend Integration:

On submit, the pipeline’s nodes and edges are sent to the backend.

The backend:

Counts nodes

Counts edges

Validates whether the pipeline is a DAG

Results are shown in an alert.

Running the Project
Frontend:
cd frontend
npm install
npm start

Backend:
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Tech Stack:

React, ReactFlow, Zustand

FastAPI (Python)

Assessment Coverage:

✔ Node abstraction

✔ Styling

✔ Dynamic Text node logic

✔ Backend integration & DAG validation