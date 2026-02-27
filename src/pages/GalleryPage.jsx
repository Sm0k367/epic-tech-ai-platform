import React from 'react'
import { Image, FileText, Mic, Heart, Download, Eye } from 'lucide-react'
import './GalleryPage.css'

function GalleryPage() {
  const galleryItems = [
    { type: 'image', title: 'Futuristic City', author: 'User123', likes: 245, views: 1200, thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400' },
    { type: 'text', title: 'AI Blog Post', author: 'Creator456', likes: 189, views: 890, thumbnail: null },
    { type: 'image', title: 'Abstract Art', author: 'Artist789', likes: 312, views: 1500, thumbnail: 'https://images.unsplash.com/photo-1686191128892-c0557e5e7b7e?w=400' },
    { type: 'audio', title: 'Podcast Intro', author: 'Podcaster', likes: 156, views: 670, thumbnail: null },
    { type: 'image', title: 'Nature Scene', author: 'PhotoPro', likes: 421, views: 2100, thumbnail: 'https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=400' },
    { type: 'text', title: 'Code Snippet', author: 'DevMaster', likes: 278, views: 1100, thumbnail: null },
    { type: 'image', title: 'Portrait', author: 'ArtistX', likes: 389, views: 1800, thumbnail: 'https://images.unsplash.com/photo-1707343843982-f8275f3994c5?w=400' },
    { type: 'audio', title: 'Voice Over', author: 'VoiceActor', likes: 201, views: 950, thumbnail: null }
  ]

  const getIcon = (type) => {
    switch(type) {
      case 'image': return <Image size={20} />
      case 'text': return <FileText size={20} />
      case 'audio': return <Mic size={20} />
      default: return <Image size={20} />
    }
  }

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="gallery-header">
          <div>
            <h1>Community Gallery</h1>
            <p>Explore amazing creations from our community</p>
          </div>
          <div className="gallery-filters">
            <button className="btn btn-primary">All</button>
            <button className="btn btn-secondary">Images</button>
            <button className="btn btn-secondary">Text</button>
            <button className="btn btn-secondary">Audio</button>
          </div>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <div className="item-preview">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={item.title} />
                ) : (
                  <div className="item-placeholder">
                    {getIcon(item.type)}
                  </div>
                )}
                <div className="item-overlay">
                  <button className="btn btn-secondary">
                    <Eye size={16} />
                  </button>
                  <button className="btn btn-secondary">
                    <Download size={16} />
                  </button>
                </div>
              </div>
              <div className="item-info">
                <div className="item-type">{getIcon(item.type)}</div>
                <h3>{item.title}</h3>
                <p className="item-author">by {item.author}</p>
                <div className="item-stats">
                  <span>
                    <Heart size={14} />
                    {item.likes}
                  </span>
                  <span>
                    <Eye size={14} />
                    {item.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryPage
