import { useState } from 'react'
import './App.css'

function App() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">MyBrand<span>.</span></h2>
        <div className="nav-links">
          <a onClick={() => scrollTo('home')}>Home</a>
          <a onClick={() => scrollTo('features')}>Features</a>
          <a onClick={() => scrollTo('pricing')}>Pricing</a>
          <a onClick={() => scrollTo('contact')}>Contact</a>
        </div>
        <button className="nav-btn" onClick={() => scrollTo('contact')}>Get Started</button>
      </nav>

      {/* HERO */}
      <header className="hero" id="home">
        <h1>Grow Your Business <span>Online</span></h1>
        <p>We build fast, modern and beautiful websites that help you get more customers and grow your brand.</p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>Start Your Project</button>
          <button className="btn-secondary" onClick={() => scrollTo('features')}>Learn More</button>
        </div>
        <p className="small-text">⭐ 500+ Happy Clients | ⭐ 4.9 Rating</p>
      </header>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="card">
          <h3>⚡ Super Fast</h3>
          <p>Your website will load in seconds. No customer will wait.</p>
        </div>
        <div className="card">
          <h3>📱 Mobile Friendly</h3>
          <p>Perfect on Mobile, Tablet and Laptop. Works everywhere.</p>
        </div>
        <div className="card">
          <h3>🎨 Modern Design</h3>
          <p>Clean and professional design that makes your brand look premium.</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <h2>Simple Pricing</h2>
        <div className="pricing-box">
          <div className="price-card">
            <h3>Basic</h3>
            <h1>$99</h1>
            <p>1 Page Website</p>
            <p>Mobile Friendly</p>
            <button className="btn-primary" onClick={() => scrollTo('contact')}>Choose Basic</button>
          </div>
          <div className="price-card popular">
            <h3>Premium ⭐</h3>
            <h1>$199</h1>
            <p>5 Pages Website</p>
            <p>Modern Design + SEO</p>
            <button className="btn-primary" onClick={() => scrollTo('contact')}>Choose Premium</button>
          </div>
          <div className="price-card">
            <h3>Business</h3>
            <h1>$399</h1>
            <p>Full Website + Store</p>
            <p>1 Year Support</p>
            <button className="btn-primary" onClick={() => scrollTo('contact')}>Choose Business</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Fill the form and we will reply within 24 hours.</p>

        {sent ? (
          <div className="success">
            <h3>✅ Thank You, {name}!</h3>
            <p>Your message has been sent successfully. We will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required rows="4"></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        )}
      </section>

      <footer>
        <p>© 2026 MyBrand. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App