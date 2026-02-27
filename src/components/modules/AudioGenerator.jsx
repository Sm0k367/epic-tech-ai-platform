import React, { useState } from 'react'
import { Sparkles, Download, Play } from 'lucide-react'
import './ModuleStyles.css'

function AudioGenerator({ demoMode }) {
  const [text, setText] = useState('')
  const [voice, setVoice] = useState('female')
  const [audioUrl, setAudioUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const voices = [
    { id: 'female', name: 'Female Voice', desc: 'Natural female voice' },
    { id: 'male', name: 'Male Voice', desc: 'Natural male voice' },
    { id: 'child', name: 'Child Voice', desc: 'Young voice' },
    { id: 'robotic', name: 'Robotic', desc: 'Synthetic robot voice' }
  ]

  const handleGenerate = () => {
    if (!text.trim()) return
    
    setLoading(true)
    setTimeout(() => {
      // Demo audio URL
      setAudioUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Audio & Voice AI</h2>
        <p>Convert text to natural-sounding speech</p>
      </div>

      <div className="module-controls">
        <div className="control-group">
          <label>Voice Type</label>
          <div className="type-selector">
            {voices.map(v => (
              <button
                key={v.id}
                className={`type-btn ${voice === v.id ? 'active' : ''}`}
                onClick={() => setVoice(v.id)}
              >
                <span className="type-name">{v.name}</span>
                <span className="type-desc">{v.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Text to Convert</label>
          <textarea
            className="prompt-input"
            placeholder="Enter the text you want to convert to speech..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
          />
        </div>

        <button 
          className="btn btn-primary generate-btn"
          onClick={handleGenerate}
          disabled={loading || !text.trim()}
        >
          {loading ? (
            <>
              <div className="loading" />
              Generating Audio...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              Generate Audio
            </>
          )}
        </button>
      </div>

      {audioUrl && (
        <div className="module-output">
          <div className="output-header">
            <h3>Generated Audio</h3>
            <div className="output-actions">
              <button className="btn btn-secondary">
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
          <div className="audio-player">
            <audio controls src={audioUrl}>
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </div>
  )
}

export default AudioGenerator
