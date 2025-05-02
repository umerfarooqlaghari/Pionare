'use client';
import { useSearchParams } from 'next/navigation';
import styles from './ProductViewer.module.css';
import { productData } from '../productData';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductViewer() {
  const params = useSearchParams();
  const slug = params.get('product') || '';
  const product = productData[slug];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!product) return <div className={styles.error}>Product not found</div>;

  return (
    <section className={styles.container}>
      <div className={styles.textBlock}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>

      <div className={styles.slider}>
        {product.images.map((src: string, idx: number) => (
          <motion.div
            key={idx}
            className={`${styles.imageWrapper} ${hoveredIndex === idx ? styles.zoomed : ''}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.1 }}
          >
            <img src={src} alt={`Product ${idx + 1}`} className={styles.image} />
          </motion.div>
        ))}
      </div>

      <div className={styles.dots}>
        {product.images.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.dot} ${hoveredIndex === idx ? styles.active : ''}`}
          />
        ))}
      </div>
    </section>
  );
}
