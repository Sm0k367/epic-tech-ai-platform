import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Sparkles, FileText, Image, Mic, MessageSquare, 
  Workflow, Zap, ArrowRight, Check, Star, Users,
  Code, Palette, Video, Database
} from 'lucide-react'
import './HomePage.css'

function HomePage() {
  const modules = [
    {
      icon: <FileText size={32} />,
      title: 'Text Generator',
      description: 'Create blogs, code, stories, documentation, and more with AI-powered text generation.',
      features: ['Blog Posts', 'Code Snippets', 'Stories', 'Documentation'],
      color: '#e91e63',
      demo: true
    },
    {
      icon: <Image size={32} />,
      title: 'Image Generator',
      description: 'Generate stunning images from text prompts. Perfect for marketing, design, and creative projects.',
      features: ['AI Art', 'Product Images', 'Illustrations', 'Concepts'],
      color: '#9c27b0',
      demo: true
    },
    {
      icon: <Mic size={32} />,
      title: 'Audio & Voice AI',
      description: 'Text-to-speech, voice cloning, audio effects, and podcast generation.',
      features: ['Text-to-Speech', 'Voice Effects', 'Audio Mixing', 'Podcasts'],
      color: '#00bcd4',
      demo: true
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'AI Chat',
      description: 'Build intelligent chatbots, support assistants, and conversational AI.',
      features: ['Support Bots', 'Assistants', 'Q&A Systems', 'Explainers'],
      color: '#4caf50',
      demo: true
    },
    {
      icon: <Video size={32} />,
      title: 'Video Generator',
      description: 'Create videos from text, images, and audio. Perfect for content creators.',
      features: ['Text-to-Video', 'Slideshows', 'Animations', 'Narration'],
      color: '#ff9800',
      demo: false
    },
    {
      icon: <Code size={32} />,
      title: 'Code Assistant',
      description: 'Generate, debug, and optimize code across multiple programming languages.',
      features: ['Code Gen', 'Debugging', 'Optimization', 'Documentation'],
      color: '#f44336',
      demo: false
    }
  ]

  const useCases = [
    {
      icon: <Palette size={24} />,
      title: 'For Creators',
      description: 'Blog writing, AI artwork, scripting podcasts and videos.',
      examples: ['Content Creation', 'Social Media', 'Marketing Materials']
    },
    {
      icon: <Database size={24} />,
      title: 'For Business',
      description: 'Support bots, code generators, auto-summarizers for meetings.',
      examples: ['Customer Support', 'Automation', 'Analytics']
    },
    {
      icon: <Code size={24} />,
      title: 'For Developers',
      description: 'Custom automations, chained workflows, rapid prototypes.',
      examples: ['API Integration', 'Workflows', 'Prototyping']
    }
  ]

  const features = [
    'Instant access - no signup required',
    'Chain multiple AI tools together',
    'Export and share your creations',
    'API access for developers',
    'Community templates and workflows',
    'Privacy-focused and secure'
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Modular AI Toolkit</span>
            </div>
            <h1 className="hero-title">
              Everything. Everywhere.
              <br />
              <span className="gradient-text">All at once.</span>
            </h1>
            <p className="hero-description">
              Professional AI tools that actually work. Generate text, images, audio, and more.
              Chain them together into powerful workflows. Try it instantly - no signup required.
            </p>
            <div className="hero-actions">
              <Link to="/playground" className="btn btn-primary btn-large">
                <Zap size={20} />
                Try It Now - Free
                <ArrowRight size={20} />
              </Link>
              <Link to="/workflow" className="btn btn-secondary btn-large">
                <Workflow size={20} />
                Build Workflows
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <Users size={20} />
                <span>10,000+ Users</span>
              </div>
              <div className="stat">
                <Star size={20} />
                <span>50,000+ Creations</span>
              </div>
              <div className="stat">
                <Workflow size={20} />
                <span>1,000+ Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="modules-section">
        <div className="container">
          <div className="section-header">
            <h2>AI Modules</h2>
            <p>Professional tools that work independently or together</p>
          </div>
          <div className="modules-grid">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className="module-card"
                style={{ '--module-color': module.color }}
              >
                <div className="module-icon" style={{ color: module.color }}>
                  {module.icon}
                </div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <div className="module-features">
                  {module.features.map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
                {module.demo && (
                  <Link to="/playground" className="module-cta">
                    Try Demo <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Preview */}
      <section className="workflow-preview">
        <div className="container">
          <div className="section-header">
            <h2>Chain Tools Together</h2>
            <p>Build powerful workflows by connecting multiple AI modules</p>
          </div>
          <div className="workflow-example">
            <div className="workflow-step">
              <Mic size={24} />
              <span>Transcribe Audio</span>
            </div>
            <ArrowRight size={24} className="workflow-arrow" />
            <div className="workflow-step">
              <FileText size={24} />
              <span>Summarize Text</span>
            </div>
            <ArrowRight size={24} className="workflow-arrow" />
            <div className="workflow-step">
              <Image size={24} />
              <span>Generate Image</span>
            </div>
            <ArrowRight size={24} className="workflow-arrow" />
            <div className="workflow-step">
              <Video size={24} />
              <span>Create Video</span>
            </div>
          </div>
          <Link to="/workflow" className="btn btn-primary">
            <Workflow size={20} />
            Build Your Workflow
          </Link>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases">
        <div className="container">
          <div className="section-header">
            <h2>Built For Everyone</h2>
            <p>From creators to enterprises, Epic Tech AI powers your workflow</p>
          </div>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="use-case-card">
                <div className="use-case-icon">{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
                <ul className="use-case-examples">
                  {useCase.examples.map((example, i) => (
                    <li key={i}>
                      <Check size={16} />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Epic Tech AI?</h2>
            <p>Everything you need in one powerful platform</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <Check size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create?</h2>
            <p>Start using Epic Tech AI today. No credit card required.</p>
            <div className="cta-actions">
              <Link to="/playground" className="btn btn-primary btn-large">
                <Zap size={20} />
                Start Creating Now
              </Link>
              <Link to="/pricing" className="btn btn-secondary btn-large">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
