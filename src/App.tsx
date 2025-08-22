import { BrowserRouter, Route, Routes } from 'react-router'
import Sleep from './pages/Sleep'
import Home from './pages/Home'
import Player from './pages/Player'
import Background from './components/Background'

function App() {
  return (
    <div className='relative bg-black/80 h-auto'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sleep />} />
          <Route path="/home" element={<Home />} />
          <Route path="/player" element={<Player />} />
        </Routes>
        <Background />
      </BrowserRouter>
    </div>
  )
}

export default App
