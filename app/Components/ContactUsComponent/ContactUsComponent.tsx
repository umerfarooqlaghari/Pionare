'use client';
import styles from './ContactUsComponent.module.css';

export default function ContactUsComponent() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* Left Side - Form */}
        <div className={styles.left}>
          <h1>Contact Us</h1>
          <p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
          <form
            action="https://formspree.io/f/your-form-id" // Replace with your real Formspree form ID
            method="POST"
            className={styles.form}
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows={4} placeholder="Message" required />
            <button type="submit">SEND</button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className={styles.right}>
          <h2>Info</h2>
          <ul>
            <li>
              <span>Email: </span> sales@pel-tt.com
            </li>
            <li>
              <span>Phone: </span> [868] 310-1720 / 1723
            </li>
            <li>
              <span>Address: </span> 59 Mark Street, Marabella Trinidad W.I.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
