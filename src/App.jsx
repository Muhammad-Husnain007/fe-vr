import { useRef, useState } from 'react'

function MovableCard() {
  const [pos, setPos] = useState({ x: 40, y: 40 })
  const draggingRef = useRef(false)
  const startRef = useRef({ mouseX: 0, mouseY: 0, x: 40, y: 40 })

  const onPointerDown = (e) => {
    draggingRef.current = true
    startRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      x: pos.x,
      y: pos.y
    }
    e.currentTarget.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!draggingRef.current) return
    const dx = e.clientX - startRef.current.mouseX
    const dy = e.clientY - startRef.current.mouseY
    setPos({ x: startRef.current.x + dx, y: startRef.current.y + dy })
  }

  const onPointerUp = (e) => {
    draggingRef.current = false
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 2
    if (e.key === 'ArrowLeft') setPos((p) => ({ ...p, x: p.x - step }))
    if (e.key === 'ArrowRight') setPos((p) => ({ ...p, x: p.x + step }))
    if (e.key === 'ArrowUp') setPos((p) => ({ ...p, y: p.y - step }))
    if (e.key === 'ArrowDown') setPos((p) => ({ ...p, y: p.y + step }))
  }

  return (
    <section
      className="card"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      aria-label="Movable welcome card"
    >
      <div
        className="drag-handle"
        role="button"
        tabIndex={0}
        aria-label="Drag handle. Use mouse to drag or arrow keys to move."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        ⠿ Move
      </div>
      <h1>React + Vite Setup isddjd this</h1>
      <p>Your project is ready.</p>
    </section>
  )
}

export default function App() {
  return (
    <main className="app">
      <MovableCard />
    </main>
  )
}
