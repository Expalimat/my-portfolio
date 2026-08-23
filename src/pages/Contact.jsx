import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section>
      <h1>Contact</h1>
      <p>Email: your.email@example.com</p>
      <p>GitHub: github.com/your-username</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
      {submitted && <p>Thanks for reaching out! (This form doesn't submit anywhere yet.)</p>}
    </section>
  );
}
