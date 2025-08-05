import { Routes, Route } from 'react-router-dom'
import Index from './components/index.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  )
}

export default App
