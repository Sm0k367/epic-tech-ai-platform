import React from 'react'
import { Check, Zap, Crown, Rocket } from 'lucide-react'
import './PricingPage.css'

function PricingPage() {
  const plans = [
    {
      name: 'Free',
      icon: <Zap size={32} />,
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out our platform',
      features: [
        '100 generations per month',
        'Basic AI modules',
        'Community support',
        'Public gallery access',
        'Standard processing speed'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      icon: <Crown size={32} />,
      price: '$29',
      period: 'per month',
      description: 'For creators and professionals',
      features: [
        '5,000 generations per month',
        'All AI modules',
        'Priority support',
        'Private creations',
        'Workflow builder',
        'API access',
        'Fast processing',
        'Export in all formats'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: <Rocket size={32} />,
      price: 'Custom',
      period: 'contact us',
      description: 'For teams and businesses',
      features: [
        'Unlimited generations',
        'Custom AI models',
        'Dedicated support',
        'Team collaboration',
        'Advanced workflows',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className="pricing-page">
      <div className="container">
        <div className="pricing-header">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-icon">{plan.icon}</div>
              <h3>{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-large`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I change plans anytime?</h4>
              <p>Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit cards, PayPal, and wire transfers for enterprise plans.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a free trial?</h4>
              <p>Yes! Pro plan comes with a 14-day free trial. No credit card required.</p>
            </div>
            <div className="faq-item">
              <h4>What happens if I exceed my limit?</h4>
              <p>You'll be notified and can upgrade your plan or purchase additional credits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
