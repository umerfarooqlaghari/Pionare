'use client';
import styles from './ShowroomSection.module.css';
import { useRouter } from 'next/navigation';

export default function VirtualShowroomSection() {
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/VR.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay}>
  <button className={styles.ctaCard} onClick={() => router.push('/virtual-showroom')}>
    Explore Virtual Showroom
  </button>
</div>
    </section>
  );
}
