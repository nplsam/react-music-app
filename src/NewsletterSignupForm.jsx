import React, { useState } from 'react';

function NewsletterSignupForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="newsletter-form">
      <h2>Subscribe to Nujabes Newsletter</h2>
      <form onSubmit={handleSubscribe}>
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
      {subscribed && <p>Thank you for subscribing!</p>}
    </div>
  );
}

export default NewsletterSignupForm;