'use client';

import { motion } from 'framer-motion';
import styles from './finance.module.css';

export default function FinancingPage() {
  return (
    <main className={styles.container}>
      <motion.h1
        className={styles.heading}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        NO CASH? NO WORRIES!
      </motion.h1>

      <motion.p
        className={styles.subheading}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Thanks to our Financing Partnership with{' '}
        <span className={styles.partner}>UNICOMER (TRINIDAD) LIMITED</span>, creating the home
        of your dreams has never been more affordable!
      </motion.p>

      <motion.p
        className={styles.italicNote}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Let us take care of your building and renovation projects, while you choose the payment terms
        that best suit your needs.
      </motion.p>

      <motion.div
        className={styles.requirementsBox}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className={styles.listHeading}>It’s easy to apply! All you need is:</h2>
        <ul className={styles.list}>
          <li>A Valid Form of ID (National ID Card, Driver’s Permit or Passport)</li>
          <li>
            Proof of Income (<strong>Job Letter AND Payslip</strong>)
          </li>
          <li>Proof of Address (Utility Bill or Bank Statement)</li>
          <li>Two (2) References (1 Relative & 1 Non-Relative)</li>
        </ul>

        <p className={styles.quickApproval}>
          Existing Ready Finance Customers can enjoy hassle free credit approval in less than 24 hours!
        </p>

        <p className={styles.terms}>
          * Special terms and conditions apply. All finance terms are subject to credit approval.
          Call or visit us in store for more information.
        </p>
      </motion.div>
    </main>
  );
}
