'use client';
import styles from './ProductsComponent.module.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const products = [
  { number: '03', title: 'CEILING', subtitle: '', right: '' },
  { number: '04', title: 'GYPSUM CEILING', subtitle: '', right: '' },
  { number: '05', title: 'GYPSUM CEILING MATERIAL', subtitle: '', right: '' },
  { number: '06', title: 'SUSPENDED CEILING', subtitle: '', right: '' },
  { number: '07', title: 'MOULDINGS', subtitle: '', right: '' },
  { number: '08', title: 'ARTISTIC MOULDINGS', subtitle: '', right: '' },
  { number: '09', title: 'CEILING ACCESSORIES', subtitle: '', right: '' },
  { number: '10', title: 'FLOORING', subtitle: '', right: '' },
  { number: '11', title: 'VINYL PLANK FLOORING', subtitle: '', right: '' },
  { number: '12', title: 'ENGINEERED HARDWOOD FLOORING', subtitle: '', right: '' },
  { number: '13', title: 'BAMBOO FLOORING', subtitle: '', right: '' },
  { number: '14', title: 'DOORS & GATES', subtitle: '', right: '' },
  { number: '15', title: 'STEEL SECURITY DOORS', subtitle: '', right: '' },
  { number: '16', title: 'SECTIONAL GARAGE DOORS', subtitle: '', right: '' },
  { number: '17', title: 'COMMERCIAL ROLL-UP SHUTTER GATES', subtitle: '', right: '' },
  { number: '18', title: 'AUTOMATIC GATE OPENERS', subtitle: '', right: '' },
  { number: '19', title: 'WINDOW /DOOR ROLL-UP SHUTTER', subtitle: '', right: '' },
  { number: '20', title: 'OTHER PRODUCTS', subtitle: '', right: '' },
  { number: '21', title: 'FINANCING', subtitle: '', right: '' },
  { number: '22', title: 'PVC LAMINATED WOODEN DOORS', subtitle: '', right: '' },
  { number: '23', title: 'DOORS WITHOUT GLASS', subtitle: '', right: '' },
];

export default function ProductsComponent() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (title: string, idx: number) => {
    setActiveIndex(idx);
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    setTimeout(() => {
      router.push(`/?product=${slug}`);
    }, 700);
  };

  return (
    <section id="products" className={styles.section}>
      {products.map((p, idx) => (
        <motion.div
          key={idx}
          className={styles.serviceRow}
          whileHover={{ scale: 1.02 }}
          onClick={() => handleClick(p.title, idx)}
        >
          <div className={`${styles.overlay} ${activeIndex === idx ? styles.showOverlay : ''}`}></div>

          <div className={styles.left}>
            <div>
              <h3>{p.title}</h3>
              {p.subtitle && <p>{p.subtitle}</p>}
            </div>
          </div>

          <div className={styles.right}>{p.right}</div>
        </motion.div>
      ))}
    </section>
  );
}
