// components/Certificate.js
import React from 'react';

export default function Certificate() {
  return (
    <div className="section">
      <h2>ALX Certification</h2>
      <img 
        src={process.env.PUBLIC_URL + '/certificate-thumb.jpg'} 
        alt="Software Engineering Certificate" 
        style={{ maxWidth: '100%' }}
      />
      <p>Validation: <a href="https://intranet.akxwe.com/certificate/7XNBMPcFNY">Verify Certificate</a></p>
    </div>
  );
}