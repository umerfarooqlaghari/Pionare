'use client';
import Link from 'next/link';
import styles from './FooterComponent.module.css';
import { span } from 'framer-motion/client';
import router from 'next/router';

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.leftBlock}>
          <p className={styles.potency}>Uncover the potency of Pionare Enterprises Limited</p>
          <h2 className={styles.email}>Sales@pel-tt.com || jobs@pel-tt.com</h2>
          <h1 className={styles.logo}>Pionare Enterprises</h1>
        </div>
       <a href="contact">
        <div className={styles.rightBlock}>
        
          <div className={styles.getStartedBox}  onClick={() => router.push('/contact')}>
          <span>Contact us, </span>
            <button> Through here →</button>
          </div>
        </div>
        </a>
      </div>

      <div className={styles.bottomSection}>
        <span>Copyright © Pionare Enterprises 2025</span>
      </div>
    </footer>
  );
}