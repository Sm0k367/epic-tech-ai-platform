import React, { useState } from 'react'
import { Code, Copy, Key, Book, Terminal } from 'lucide-react'
import './APIPage.css'

function APIPage({ user }) {
  const [apiKey, setApiKey] = useState('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

  const codeExample = `// Initialize the Epic Tech AI client
import EpicTechAI from 'epic-tech-ai';

const client = new EpicTechAI({
  apiKey: '${apiKey}'
});

// Generate text
const response = await client.text.generate({
  prompt: 'Write a blog post about AI',
  type: 'blog',
  maxTokens: 1000
});

console.log(response.content);

// Generate image
const image = await client.image.generate({
  prompt: 'A futuristic city at sunset',
  style: 'realistic',
  size: '1024x1024'
});

console.log(image.url);`

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/text/generate',
      description: 'Generate text content'
    },
    {
      method: 'POST',
      path: '/api/v1/image/generate',
      description: 'Generate images from prompts'
    },
    {
      method: 'POST',
      path: '/api/v1/audio/generate',
      description: 'Convert text to speech'
    },
    {
      method: 'POST',
      path: '/api/v1/workflow/execute',
      description: 'Execute a workflow'
    },
    {
      method: 'GET',
      path: '/api/v1/usage',
      description: 'Get API usage statistics'
    }
  ]

  return (
    <div className="api-page">
      <div className="container">
        <div className="api-header">
          <div>
            <h1>
              <Code size={32} />
              API Documentation
            </h1>
            <p>Integrate Epic Tech AI into your applications</p>
          </div>
        </div>

        <div className="api-content">
          <div className="api-section">
            <div className="section-icon">
              <Key size={24} />
            </div>
            <h2>Your API Key</h2>
            <p>Use this key to authenticate your API requests</p>
            <div className="api-key-box">
              <code>{apiKey}</code>
              <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(apiKey)}>
                <Copy size={16} />
                Copy
              </button>
            </div>
            {!user && (
              <p className="warning-text">
                <Key size={16} />
                Sign in to get your personal API key
              </p>
            )}
          </div>

          <div className="api-section">
            <div className="section-icon">
              <Terminal size={24} />
            </div>
            <h2>Quick Start</h2>
            <p>Get started with our API in minutes</p>
            <div className="code-block">
              <div className="code-header">
                <span>JavaScript</span>
                <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(codeExample)}>
                  <Copy size={16} />
                  Copy
                </button>
              </div>
              <pre><code>{codeExample}</code></pre>
            </div>
          </div>

          <div className="api-section">
            <div className="section-icon">
              <Book size={24} />
            </div>
            <h2>API Endpoints</h2>
            <p>Available endpoints for your integration</p>
            <div className="endpoints-list">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="endpoint-item">
                  <span className={`method method-${endpoint.method.toLowerCase()}`}>
                    {endpoint.method}
                  </span>
                  <code className="endpoint-path">{endpoint.path}</code>
                  <p>{endpoint.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="api-section">
            <h2>Rate Limits</h2>
            <div className="rate-limits">
              <div className="rate-limit-item">
                <h4>Free Plan</h4>
                <p>100 requests per day</p>
              </div>
              <div className="rate-limit-item">
                <h4>Pro Plan</h4>
                <p>10,000 requests per day</p>
              </div>
              <div className="rate-limit-item">
                <h4>Enterprise</h4>
                <p>Unlimited requests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default APIPage
