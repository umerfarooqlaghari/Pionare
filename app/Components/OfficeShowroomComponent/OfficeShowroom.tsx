'use client';
import styles from './OfficeShowroom.module.css';
import Image from 'next/image';

const hotspots = [
    {
      id: 'chair',
      x: '19%',
      y: '68%',
      label: 'Office Chair',
      description: 'Ergonomic high-back chair with adjustable lumbar support',
    },
    {
      id: 'desk',
      x: '31%',
      y: '72%',
      label: 'Executive Desk',
      description: 'Wooden desk with clean finish and storage drawers',
    },
    {
      id: 'tv',
      x: '60%',
      y: '39%',
      label: 'Display Screen',
      description: 'Wall-mounted 4K display screen for meetings',
    },
    {
      id: 'shelf',
      x: '84.5%',
      y: '45%',
      label: 'Floating Shelf',
      description: 'Accent shelf with ambient lighting',
    },
  ];
  
  

export default function OfficeShowroom() {
  return (
    <div className={styles.container}>
      <Image
        src="/office-placeholder.jpg" // Ensure this path matches your public directory
        alt="Office Showroom"
        width={1200}
        height={800}
        className={styles.image}
      />
      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className={styles.hotspot}
          style={{ top: spot.y, left: spot.x }}
        >
          <div className={styles.dot}></div>
          <div className={styles.tooltip}>
            <strong>{spot.label}</strong>
            <p>{spot.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
