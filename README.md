# fe-design
A minimal React + Vite frontend that renders a draggable, keyboard-movable welcome card.
## Project Purpose
Provide a simple UI foundation with accessible movement controls for a card component.
## Main Features
- Single-page React app mounted at `#root` from `src/main.jsx`.
- Movable card (`MovableCard`) with pointer drag using Pointer Events.
- Keyboard movement via arrow keys (2px step, or 10px with Shift).
- Accessible drag handle with `role="button"`, `tabIndex={0}`, and ARIA label.
## Technology Stack
- React 18, ReactDOM 18
- Vite 5 with `@vitejs/plugin-react`
- CSS in `src/index.css` for layout and component styling
## Run / Setup Commands
- `npm install`
- `npm run dev` (start Vite dev server)
- `npm run build` (production build)
- `npm run preview` (preview production build locally)