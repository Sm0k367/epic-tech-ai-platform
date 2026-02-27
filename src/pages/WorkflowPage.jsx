import React, { useState } from 'react'
import { Workflow, Plus, Play, Save, Share2, ArrowRight } from 'lucide-react'
import './WorkflowPage.css'

function WorkflowPage({ demoMode }) {
  const [workflow, setWorkflow] = useState([])
  const [availableModules] = useState([
    { id: 'text', name: 'Text Generator', icon: '📝' },
    { id: 'image', name: 'Image Generator', icon: '🖼️' },
    { id: 'audio', name: 'Audio Generator', icon: '🎵' },
    { id: 'summarize', name: 'Summarizer', icon: '📋' },
    { id: 'translate', name: 'Translator', icon: '🌐' },
    { id: 'analyze', name: 'Analyzer', icon: '📊' }
  ])

  const addModule = (module) => {
    setWorkflow([...workflow, { ...module, id: Date.now() }])
  }

  const removeModule = (id) => {
    setWorkflow(workflow.filter(m => m.id !== id))
  }

  const runWorkflow = () => {
    alert('Workflow execution started! (Demo mode)')
  }

  return (
    <div className="workflow-page">
      <div className="container">
        <div className="workflow-header">
          <div>
            <h1>
              <Workflow size={32} />
              Workflow Builder
            </h1>
            <p>Chain AI modules together to create powerful automated workflows</p>
          </div>
          <div className="workflow-actions">
            <button className="btn btn-secondary">
              <Save size={18} />
              Save Workflow
            </button>
            <button className="btn btn-secondary">
              <Share2 size={18} />
              Share
            </button>
            <button className="btn btn-primary" onClick={runWorkflow} disabled={workflow.length === 0}>
              <Play size={18} />
              Run Workflow
            </button>
          </div>
        </div>

        <div className="workflow-content">
          <div className="modules-palette">
            <h3>Available Modules</h3>
            <div className="module-list">
              {availableModules.map(module => (
                <button
                  key={module.id}
                  className="module-item"
                  onClick={() => addModule(module)}
                >
                  <span className="module-icon">{module.icon}</span>
                  <span>{module.name}</span>
                  <Plus size={16} />
                </button>
              ))}
            </div>
          </div>

          <div className="workflow-canvas">
            <h3>Your Workflow</h3>
            {workflow.length === 0 ? (
              <div className="empty-workflow">
                <Workflow size={48} />
                <p>Start building by adding modules from the left</p>
              </div>
            ) : (
              <div className="workflow-chain">
                {workflow.map((module, index) => (
                  <React.Fragment key={module.id}>
                    <div className="workflow-module">
                      <span className="module-icon">{module.icon}</span>
                      <span>{module.name}</span>
                      <button 
                        className="remove-btn"
                        onClick={() => removeModule(module.id)}
                      >
                        ×
                      </button>
                    </div>
                    {index < workflow.length - 1 && (
                      <ArrowRight size={24} className="workflow-arrow" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkflowPage
