import React from 'react';

export default function Home() {
  return (
    <main>
      <section className="header">
        <h1>Iriele Odinaka Moses</h1>
        <p>Full-Stack Engineer | Backend Specialist</p>
        <div className="contact-bar">
          <a href="mailto:iriele.moses@gmail.com">📧 Email</a>
          <a href="tel:+2348188665524">📱 +234 818 866 5524</a>
          <a href="https://github.com/MosesOdinaka">🐙 GitHub</a>
          <a href="https://linkedin.com/in/odinakamoses">💼 LinkedIn</a>
        </div>
      </section>
      <section className="section">
        <h2>🚀 Technical Skills</h2>
        <ul>
          <li>JavaScript (Proficient), Python (Basic)</li>
          <li>Node.js, Express.js, React, Angular</li>
          <li>MongoDB, REST APIs, Git</li>
        </ul>
      </section>
      <section className="section">
        <h2>💻 Key Projects</h2>
        <div className="project-card">
          <h3>Fitness Tracker App</h3>
          <p>Node.js | Express | MongoDB | React</p>
          <ul>
            <li>Implemented secure authentication with bcrypt</li>
            <li>Developed REST API endpoints for fitness data</li>
          </ul>
        </div>
        
        <div className="project-card">
          <h3>Digital Banking App</h3>
          <p>React | Node.js | Payment Gateways</p>
          <ul>
            <li>Integrated instant money transfer functionality</li>
            <li>Implemented virtual debit card management</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <h2>📜 Certifications</h2>
        <a href="/certificate">
          <img 
            src={`${process.env.PUBLIC_URL}/certificate-thumb.png`} 
            alt="ALX Certification" 
            width="200" 
          />
          <p>ALX Back-end Specialization (Validated)</p>
        </a>
      </section>
    </main>
  );
}