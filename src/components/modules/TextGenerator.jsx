import React, { useState } from 'react'
import { Sparkles, Copy, Download, RefreshCw } from 'lucide-react'
import './ModuleStyles.css'

function TextGenerator({ demoMode }) {
  const [prompt, setPrompt] = useState('')
  const [type, setType] = useState('blog')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const types = [
    { id: 'blog', name: 'Blog Post', description: 'SEO-optimized blog content' },
    { id: 'code', name: 'Code', description: 'Programming code snippets' },
    { id: 'story', name: 'Story', description: 'Creative storytelling' },
    { id: 'docs', name: 'Documentation', description: 'Technical documentation' },
    { id: 'email', name: 'Email', description: 'Professional emails' },
    { id: 'social', name: 'Social Media', description: 'Engaging social posts' }
  ]

  const demoOutputs = {
    blog: `# The Future of AI in Content Creation

Artificial Intelligence is revolutionizing how we create and consume content. From automated writing assistants to sophisticated image generators, AI tools are becoming indispensable for creators, marketers, and businesses alike.

## Key Benefits

1. **Efficiency**: Generate high-quality content in seconds
2. **Consistency**: Maintain brand voice across all platforms
3. **Scalability**: Produce more content without additional resources

The integration of AI into content workflows isn't just a trend—it's the future of digital creation.`,
    code: `// React Component Example
function UserProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div className="profile-card">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}`,
    story: `The old lighthouse stood sentinel against the storm, its beam cutting through the darkness like a sword of light. Sarah had climbed these stairs a thousand times, but tonight felt different. Tonight, the sea whispered secrets she'd never heard before.

As she reached the top, the wind howled around her, carrying with it the scent of salt and mystery. In the distance, a ship's horn echoed—a sound that shouldn't exist, not in these abandoned waters.`,
    docs: `## API Documentation

### Authentication
All API requests require authentication using an API key. Include your key in the request header:

\`\`\`
Authorization: Bearer YOUR_API_KEY
\`\`\`

### Endpoints

#### POST /api/generate
Generate AI content based on your prompt.

**Parameters:**
- \`prompt\` (string, required): Your generation prompt
- \`type\` (string, optional): Content type (text, image, audio)
- \`max_tokens\` (integer, optional): Maximum output length`,
    email: `Subject: Exciting Partnership Opportunity

Dear [Name],

I hope this email finds you well. I'm reaching out to discuss a potential partnership that could benefit both our organizations.

Our platform has been helping businesses streamline their AI workflows, and I believe there's a strong synergy with your company's mission. I'd love to schedule a brief call to explore how we might work together.

Would you be available for a 15-minute conversation next week?

Best regards,
[Your Name]`,
    social: `🚀 Just launched our new AI platform! 

✨ Generate text, images, and audio
🔗 Chain tools into powerful workflows
🎯 No signup required to try

The future of content creation is here. Check it out! 👇

#AI #ContentCreation #Innovation`
  }

  const handleGenerate = () => {
    if (!prompt.trim()) return
    
    setLoading(true)
    // Simulate AI generation
    setTimeout(() => {
      setOutput(demoOutputs[type])
      setLoading(false)
    }, 1500)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    alert('Copied to clipboard!')
  }

  const handleDownload = () => {
    const blob = new Blob([output], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${type}-output.txt`
    a.click()
  }

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Text Generator</h2>
        <p>Generate high-quality text content for any purpose</p>
      </div>

      <div className="module-controls">
        <div className="control-group">
          <label>Content Type</label>
          <div className="type-selector">
            {types.map(t => (
              <button
                key={t.id}
                className={`type-btn ${type === t.id ? 'active' : ''}`}
                onClick={() => setType(t.id)}
              >
                <span className="type-name">{t.name}</span>
                <span className="type-desc">{t.description}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Your Prompt</label>
          <textarea
            className="prompt-input"
            placeholder={`Describe what you want to generate... (e.g., "Write a blog post about AI in healthcare")`}
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
              Generating...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              Generate {types.find(t => t.id === type)?.name}
            </>
          )}
        </button>
      </div>

      {output && (
        <div className="module-output">
          <div className="output-header">
            <h3>Generated Content</h3>
            <div className="output-actions">
              <button className="btn btn-secondary" onClick={handleCopy}>
                <Copy size={16} />
                Copy
              </button>
              <button className="btn btn-secondary" onClick={handleDownload}>
                <Download size={16} />
                Download
              </button>
              <button className="btn btn-secondary" onClick={handleGenerate}>
                <RefreshCw size={16} />
                Regenerate
              </button>
            </div>
          </div>
          <div className="output-content">
            <pre>{output}</pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default TextGenerator
