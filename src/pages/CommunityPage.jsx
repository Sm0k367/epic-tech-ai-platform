import React from 'react'
import { Users, MessageSquare, Share2, Heart, TrendingUp, Award } from 'lucide-react'
import './CommunityPage.css'

function CommunityPage() {
  const workflows = [
    { title: 'Blog Post Generator', author: 'ContentKing', likes: 342, uses: 1200, description: 'Generate SEO-optimized blog posts with images' },
    { title: 'Social Media Pack', author: 'SocialPro', likes: 289, uses: 980, description: 'Create complete social media content packages' },
    { title: 'Podcast Producer', author: 'AudioMaster', likes: 215, uses: 750, description: 'Full podcast production workflow' },
    { title: 'Code Documentation', author: 'DevHelper', likes: 198, uses: 650, description: 'Auto-generate code documentation' }
  ]

  const topCreators = [
    { name: 'ContentKing', creations: 156, followers: 2400 },
    { name: 'SocialPro', creations: 142, followers: 2100 },
    { name: 'AudioMaster', creations: 128, followers: 1800 },
    { name: 'DevHelper', creations: 115, followers: 1600 }
  ]

  return (
    <div className="community-page">
      <div className="container">
        <div className="community-header">
          <div>
            <h1>
              <Users size={32} />
              Community
            </h1>
            <p>Share, discover, and collaborate with creators worldwide</p>
          </div>
        </div>

        <div className="community-stats">
          <div className="stat-card">
            <Users size={32} />
            <div>
              <h3>10,000+</h3>
              <p>Active Users</p>
            </div>
          </div>
          <div className="stat-card">
            <Share2 size={32} />
            <div>
              <h3>50,000+</h3>
              <p>Shared Creations</p>
            </div>
          </div>
          <div className="stat-card">
            <MessageSquare size={32} />
            <div>
              <h3>1,000+</h3>
              <p>Workflows</p>
            </div>
          </div>
          <div className="stat-card">
            <TrendingUp size={32} />
            <div>
              <h3>Growing</h3>
              <p>Every Day</p>
            </div>
          </div>
        </div>

        <div className="community-content">
          <div className="workflows-section">
            <h2>
              <TrendingUp size={24} />
              Trending Workflows
            </h2>
            <div className="workflows-list">
              {workflows.map((workflow, index) => (
                <div key={index} className="workflow-card">
                  <div className="workflow-header">
                    <h3>{workflow.title}</h3>
                    <button className="btn btn-secondary">
                      <Share2 size={16} />
                      Use
                    </button>
                  </div>
                  <p className="workflow-author">by {workflow.author}</p>
                  <p className="workflow-description">{workflow.description}</p>
                  <div className="workflow-stats">
                    <span>
                      <Heart size={14} />
                      {workflow.likes}
                    </span>
                    <span>
                      <Users size={14} />
                      {workflow.uses} uses
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="creators-section">
            <h2>
              <Award size={24} />
              Top Creators
            </h2>
            <div className="creators-list">
              {topCreators.map((creator, index) => (
                <div key={index} className="creator-card">
                  <div className="creator-rank">#{index + 1}</div>
                  <div className="creator-info">
                    <h4>{creator.name}</h4>
                    <div className="creator-stats">
                      <span>{creator.creations} creations</span>
                      <span>{creator.followers} followers</span>
                    </div>
                  </div>
                  <button className="btn btn-secondary">Follow</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityPage
