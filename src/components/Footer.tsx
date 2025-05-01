import React, { JSX } from 'react';
import { VariablesUtils, varReturn } from '../utils/global';
import styles from './styles/Footer.module.css';

const version = new VariablesUtils("version", "1.0");
const copyright = new VariablesUtils(
  "copy",
  "Menu Manager, Tous droits réservés"
);

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p className={styles.line}>V{varReturn(version.value)}</p>
      <p className={styles.line}>&copy; {varReturn(copyright.value)}</p>
    </footer>
  );
}
