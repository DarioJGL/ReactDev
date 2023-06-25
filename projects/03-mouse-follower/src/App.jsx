import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  function agregarClase() {
    if (enabled === false) {
      var div = document.getElementById('div1');
      div.classList.add("ocultar");
    } else {
      var div = document.getElementById('div1');
      div.classList.remove("ocultar");
    }

  }
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    agregarClase()
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div id="div1" style={{

        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`

      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar ' : 'Activar '}seguir puntero
      </button>
    </>
  )
}

function App() {


  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
