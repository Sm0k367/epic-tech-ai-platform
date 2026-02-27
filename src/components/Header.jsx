import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap, User, LogIn } from 'lucide-react'
import './Header.css'

function Header({ user, setUser, demoMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogin = () => {
    // Demo login
    setUser({ name: 'Demo User', email: 'demo@epic-tech.ai' })
  }

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <Zap size={28} />
          <span>EPIC TECH AI</span>
        </Link>

        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/playground" onClick={() => setMobileMenuOpen(false)}>Playground</Link>
          <Link to="/workflow" onClick={() => setMobileMenuOpen(false)}>Workflows</Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/api" onClick={() => setMobileMenuOpen(false)}>API</Link>
          <Link to="/community" onClick={() => setMobileMenuOpen(false)}>Community</Link>
          <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
        </nav>

        <div className="header-actions">
          {demoMode && (
            <span className="demo-badge">
              <Zap size={14} />
              Demo Mode
            </span>
          )}
          {user ? (
            <button className="btn btn-secondary user-btn">
              <User size={18} />
              {user.name}
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleLogin}>
              <LogIn size={18} />
              Sign In
            </button>
          )}
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header
