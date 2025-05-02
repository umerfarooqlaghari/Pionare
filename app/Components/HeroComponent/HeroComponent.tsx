'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './HeroComponent.module.css';

const descriptions = [
  "Explore premium ceilings and mouldings",
  "Browse steel security doors and shutters",
  "Discover our engineered flooring collection",
  "Automatic gates and door innovations"
];

export default function HeroComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % descriptions.length);
    }, 5000); // 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.hero}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/InteriorDesign.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}>
        <h1 className={styles.heading}>Browse through our products</h1>
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.description}
          >
            {descriptions[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
