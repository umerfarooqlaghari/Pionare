'use client';
import { useState } from 'react';
import styles from './HeaderComponent.module.css';
import { HiOutlinePhone, HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';


interface HeaderProps {
  setSection?: (section: string) => void;
}



const menuItems = [
  'CEILING', 'GYPSUM CEILING', 'GYPSUM CEILING MATERIAL',
  'SUSPENDED CEILING', 'MOULDINGS', 'ARTISTIC MOULDINGS', 'CEILING ACCESSORIES', 'FLOORING',
  'VINYL PLANK FLOORING', 'ENGINEERED HARDWOOD FLOORING', 'BAMBOO FLOORING', 'DOORS & GATES',
  'STEEL SECURITY DOORS', 'SECTIONAL GARAGE DOORS', 'COMMERCIAL ROLL-UP SHUTTER GATES',
  'AUTOMATIC GATE OPENERS', 'WINDOW /DOOR ROLL-UP SHUTTER',
  'PVC LAMINATED WOODEN DOORS', 'DOORS WITHOUT GLASS', 'OTHER PRODUCTS'
];

export default function HeaderComponent({ setSection }: HeaderProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item: string) => {
    const slug = item.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    router.push(`/?product=${slug}`);
    setMenuOpen(false);
  };


  return (
    <header className={styles.header}>
      <div className={styles.logo}>PIONARE</div>

 <div className={styles.actions}>
        {/* 📞 Contact Icon */}

                 <div className={styles.phoneIcon} onClick={() => router.push('/finance')}>
          <i className="bi bi-bank"></i>
        </div>
        <div className={styles.phoneIcon} onClick={() => router.push('/contact')}>
          <i className="bi bi-telephone-inbound"></i>
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.menuBackdrop} onClick={() => setMenuOpen(false)}>
          <div className={`${styles.fullMenuOverlay} ${styles.slideIn}`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.menuItems}>
              {menuItems.map((item, index) => (
                <span key={index} className={styles.navItem} onClick={() => handleClick(item)}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
