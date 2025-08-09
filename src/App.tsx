import { useState } from 'react'
import './App.css'
import PinnedIcon from './components/pinnedIcons';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <footer style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        paddingInline: '8px',
        height: '48px',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
      }}>
        <PinnedIcon
          imageSrc="../public/vite.svg"
          onClick={() => 1}
          label="Notepad"
        />
        <PinnedIcon
          imageSrc="../public/vite.svg"
          onClick={() => 1}
          label="Notepad"
        />
        <PinnedIcon
          imageSrc="../public/vite.svg"
          onClick={() => 1}
          label="Notepad"
        />
      </footer >
    </>
  );
}

export default App
