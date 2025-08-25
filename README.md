# MERNthinkboard

A note-taking app built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Create, read, update, and delete notes
- Responsive UI with Tailwind CSS
- Rate limiting for API security
- RESTful API with Express
- Vite-powered React frontend

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Upstash Redis (rate limiting)
- **Other:** Axios, Lucide React Icons

## Getting Started

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mandinumaneth/MERNthinkboard.git
   cd MERNthinkboard
   ```
2. **Install dependencies:**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in `backend/` with your MongoDB URI and any Upstash credentials.
4. **Run the servers:**
   - **Backend:**
     ```bash
     cd backend
     npm run dev
     ```
   - **Frontend:**
     ```bash
     cd frontend
     npm run dev
     ```
5. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:5001/api/notes](http://localhost:5001/api/notes)

## API Endpoints

- `GET /api/notes` - List all notes
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get a note by ID
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Example Note Data

```json
{
  "title": "Meeting Notes",
  "content": "Discussed project milestones and assigned tasks to team members."
}
```
