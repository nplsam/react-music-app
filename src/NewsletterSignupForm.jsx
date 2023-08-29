import React, { useState } from 'react';

function NewsletterSignupForm() {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="newsletter-form">
      <h2>Subscribe to Nujabes Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterSignupForm;