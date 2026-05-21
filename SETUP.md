# TechHub - Project Setup Guide

## Project Structure

The project is now organized into two main folders:

```
├── frontend/          # React frontend application
│   ├── src/          # React components, hooks, context, utilities
│   ├── public/       # Static assets
│   ├── dist/         # Build output (created after npm run build)
│   ├── index.html    # HTML entry point
│   ├── package.json  # Frontend dependencies and scripts
│   └── vite.config.js # Vite configuration
│
├── backend/          # Express.js backend API
│   ├── src/          # Controllers, routes, models, middleware
│   ├── uploads/      # User uploaded files
│   ├── database.sqlite # SQLite database
│   ├── index.js      # Server entry point
│   └── package.json  # Backend dependencies and scripts
│
├── .env              # Environment variables (shared)
├── package.json      # Root package.json with workspace scripts
└── README.md         # Project documentation
```

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. **Install all dependencies:**
   ```bash
   npm install
   ```
   This will install dependencies for both frontend and backend.

### Running the Application

#### Option 1: Run Frontend and Backend Separately (Recommended for development)

**Terminal 1 - Start Backend:**
```bash
npm run backend
# or
npm --prefix backend run dev
```
The backend will run on `http://localhost:9000`

**Terminal 2 - Start Frontend:**
```bash
npm run frontend
# or
npm --prefix frontend run dev
```
The frontend will run on `http://localhost:5173` (default Vite port)

#### Option 2: Run Both Together
```bash
npm run dev
```
(Requires running in a shell that supports background jobs)

### Building for Production

```bash
npm run build
```
This will build the frontend. The built files will be in `frontend/dist/`

### Environment Variables

The `.env` file at the root contains shared configuration:
- `VITE_API_BASE_URL`: Backend API URL (default: `http://localhost:9000`)

### Available Scripts

**Frontend (from `frontend/` folder or via root):**
- `npm --prefix frontend run dev` - Start dev server
- `npm --prefix frontend run build` - Build for production
- `npm --prefix frontend run lint` - Run ESLint
- `npm --prefix frontend run preview` - Preview production build

**Backend (from `backend/` folder or via root):**
- `npm --prefix backend run dev` - Start dev server with auto-reload
- `npm --prefix backend start` - Start production server

## Folder Responsibilities

### Frontend
- React components (in `src/components/`)
- Custom hooks (in `src/hooks/`)
- Context providers (in `src/context/`)
- Utilities and helpers (in `src/utils/`)
- Static assets (in `public/`)

### Backend
- API routes (in `src/routes/`)
- Controllers/handlers (in `src/controllers/`)
- Database models (in `src/models/`)
- Middleware (in `src/middlewares/`)
- Database configuration (in `src/config/`)

## API Endpoints

The frontend communicates with the backend via REST API at `http://localhost:9000`:

- `GET /products` - Get all products
- `GET /categories` - Get all categories
- `GET /cart` - Get user cart
- `GET /orders` - Get user orders
- And more...

## Notes

- Frontend and backend have separate `package.json` files and `node_modules`
- The `.env` file should be at the project root and will be accessible to both
- For production deployment, build the frontend separately and serve it from the backend if needed
