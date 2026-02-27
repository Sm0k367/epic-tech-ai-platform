import React, { useState } from 'react'
import { FileText, Image, Mic, MessageSquare, Sparkles, Download, Copy, Share2 } from 'lucide-react'
import TextGenerator from '../components/modules/TextGenerator'
import ImageGenerator from '../components/modules/ImageGenerator'
import AudioGenerator from '../components/modules/AudioGenerator'
import ChatModule from '../components/modules/ChatModule'
import './PlaygroundPage.css'

function PlaygroundPage({ demoMode }) {
  const [activeModule, setActiveModule] = useState('text')

  const modules = [
    { id: 'text', name: 'Text Generator', icon: <FileText size={20} />, component: TextGenerator },
    { id: 'image', name: 'Image Generator', icon: <Image size={20} />, component: ImageGenerator },
    { id: 'audio', name: 'Audio & Voice', icon: <Mic size={20} />, component: AudioGenerator },
    { id: 'chat', name: 'AI Chat', icon: <MessageSquare size={20} />, component: ChatModule }
  ]

  const ActiveComponent = modules.find(m => m.id === activeModule)?.component

  return (
    <div className="playground-page">
      <div className="container">
        <div className="playground-header">
          <div>
            <h1>
              <Sparkles size={32} />
              AI Playground
            </h1>
            <p>Try our AI modules instantly. No signup required in demo mode.</p>
          </div>
          {demoMode && (
            <div className="demo-notice">
              <Sparkles size={16} />
              <span>Demo Mode - Sign in to save your work</span>
            </div>
          )}
        </div>

        <div className="playground-content">
          <div className="module-selector">
            {modules.map(module => (
              <button
                key={module.id}
                className={`module-btn ${activeModule === module.id ? 'active' : ''}`}
                onClick={() => setActiveModule(module.id)}
              >
                {module.icon}
                <span>{module.name}</span>
              </button>
            ))}
          </div>

          <div className="module-workspace">
            {ActiveComponent && <ActiveComponent demoMode={demoMode} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaygroundPage
