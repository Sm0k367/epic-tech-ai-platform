import React, { useState } from 'react'
import { Sparkles, Download, RefreshCw, Maximize2 } from 'lucide-react'
import './ModuleStyles.css'

function ImageGenerator({ demoMode }) {
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState('realistic')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const styles = [
    { id: 'realistic', name: 'Realistic', desc: 'Photo-realistic images' },
    { id: 'artistic', name: 'Artistic', desc: 'Artistic and painterly' },
    { id: 'anime', name: 'Anime', desc: 'Anime and manga style' },
    { id: '3d', name: '3D Render', desc: '3D rendered look' },
    { id: 'sketch', name: 'Sketch', desc: 'Hand-drawn sketch' },
    { id: 'abstract', name: 'Abstract', desc: 'Abstract art' }
  ]

  // Demo images (placeholder URLs)
  const demoImages = [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500',
    'https://images.unsplash.com/photo-1686191128892-c0557e5e7b7e?w=500',
    'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500',
    'https://images.unsplash.com/photo-1707343843982-f8275f3994c5?w=500'
  ]

  const handleGenerate = () => {
    if (!prompt.trim()) return
    
    setLoading(true)
    setTimeout(() => {
      setImages(demoImages)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Image Generator</h2>
        <p>Create stunning AI-generated images from text descriptions</p>
      </div>

      <div className="module-controls">
        <div className="control-group">
          <label>Image Style</label>
          <div className="type-selector">
            {styles.map(s => (
              <button
                key={s.id}
                className={`type-btn ${style === s.id ? 'active' : ''}`}
                onClick={() => setStyle(s.id)}
              >
                <span className="type-name">{s.name}</span>
                <span className="type-desc">{s.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Image Description</label>
          <textarea
            className="prompt-input"
            placeholder="Describe the image you want to create... (e.g., 'A futuristic city at sunset with flying cars')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
          />
        </div>

        <button 
          className="btn btn-primary generate-btn"
          onClick={handleGenerate}
          disabled={loading || !prompt.trim()}
        >
          {loading ? (
            <>
              <div className="loading" />
              Generating Images...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              Generate Images
            </>
          )}
        </button>
      </div>

      {images.length > 0 && (
        <div className="module-output">
          <div className="output-header">
            <h3>Generated Images</h3>
            <div className="output-actions">
              <button className="btn btn-secondary" onClick={handleGenerate}>
                <RefreshCw size={16} />
                Regenerate
              </button>
            </div>
          </div>
          <div className="image-grid">
            {images.map((img, index) => (
              <div key={index} className="image-item">
                <img src={img} alt={`Generated ${index + 1}`} />
                <div className="image-overlay">
                  <button className="btn btn-secondary">
                    <Download size={16} />
                  </button>
                  <button className="btn btn-secondary">
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGenerator
