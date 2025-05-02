'use client';
import styles from './ShowroomComponent.module.css';
import { useEffect, useRef, useState } from 'react';

const items = [
  {
    id: 1,
    title: 'Luxury Hotel',
    description: 'Explore premium suites and amenities in 360°.',
    image: '/vr1.jpg',
    video: '/InteriorDesign.mp4',
  },
  {
    id: 2,
    title: 'Modern Restaurant',
    description: 'Step inside elegant dining environments virtually.',
    image: '/vr2.jpg',
    video: '/InteriorDesign.mp4',
  },
  {
    id: 3,
    title: 'Smart Home',
    description: 'Preview automation & layout in a realistic way.',
    image: '/vr3.jpg',
    video: '/InteriorDesign.mp4',
  },
  {
    id: 4,
    title: 'Modern Restaurant',
    description: 'Step inside elegant dining environments virtually.',
    image: '/vr2.jpg',
    video: '/InteriorDesign.mp4',
  },
];

export default function ShowroomComponent() {
  const [selected, setSelected] = useState<number | null>(null);
  const [videoSpeed, setVideoSpeed] = useState(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleSetSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
    setVideoSpeed(speed);
  };

  // ✅ Rotate to landscape on supported mobile browsers
  useEffect(() => {
    const videoEl = videoRef.current;

    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement;

      if (isFullscreen) {
        const orientation = (screen.orientation ||
          (screen as any).mozOrientation ||
          (screen as any).msOrientation) as any;

        if (orientation?.lock) {
          orientation.lock('landscape').catch((err: any) => {
            console.warn('Orientation lock failed:', err);
          });
        } else {
          console.warn('Orientation lock not supported');
        }
      }
    };

    if (videoEl) {
      videoEl.addEventListener('fullscreenchange', handleFullscreenChange);
      videoEl.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    }

    return () => {
      if (videoEl) {
        videoEl.removeEventListener('fullscreenchange', handleFullscreenChange);
        videoEl.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={selected !== null ? styles.cardsSelected : styles.cards}>
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.card} ${selected === index ? styles.activeCard : ''}`}
            onClick={() => setSelected(index)}
          >
            <img src={item.image} alt={item.title} className={styles.image} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className={styles.videoSection}>
          <video
            ref={videoRef}
            className={styles.videoPlayer}
            src={items[selected].video}
            controls
            controlsList="nodownload"
          />
          <div className={styles.controls}>
            <button onClick={() => handleSetSpeed(1)}>1x</button>
            <button onClick={() => handleSetSpeed(1.5)}>1.5x</button>
            <button onClick={() => handleSetSpeed(2)}>2x</button>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
