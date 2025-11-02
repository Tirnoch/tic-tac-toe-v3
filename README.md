# Tic-Tac-Toe

Interactive React implementation of a classic Tic-Tac-Toe game built with Vite. Players can rename themselves, take turns placing markers, and the interface announces victories and draws.

## Prerequisites
- Node.js 18+
- npm 10+ (bundled with Node.js)

## Install & Run
```bash
npm install
npm run dev
```
The development server prints a local URL (usually `http://localhost:5173`). Open it in your browser to play.

## Available Scripts
- `npm run dev` — start the Vite development server with hot reloading.
- `npm run build` — create an optimized production build.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint with the project rules.

## Project Structure
- `src/App.jsx` — game state management, win/draw detection, and rendering.
- `src/components/` — UI building blocks (board, player controls, log, header).
- `winning-combinations.js` — all line combinations that result in a win.

Feel free to extend the game by tracking scores, adding animations, or experimenting with alternative UIs.
