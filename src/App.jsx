import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import PlaygroundPage from './pages/PlaygroundPage'
import WorkflowPage from './pages/WorkflowPage'
import GalleryPage from './pages/GalleryPage'
import PricingPage from './pages/PricingPage'
import APIPage from './pages/APIPage'
import CommunityPage from './pages/CommunityPage'

function App() {
  const [user, setUser] = useState(null)
  const [demoMode, setDemoMode] = useState(true)

  return (
    <Router>
      <div className="app">
        <Header user={user} setUser={setUser} demoMode={demoMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/playground" element={<PlaygroundPage demoMode={demoMode} />} />
          <Route path="/workflow" element={<WorkflowPage demoMode={demoMode} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/api" element={<APIPage user={user} />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
