import React, { JSX } from 'react';
import styles from './styles/Header.module.css';
import { VariablesUtils, varReturn } from '../utils/global';

const AppName = new VariablesUtils("AppName", "Menu Manager");

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{varReturn(AppName.value)}</h1>
    </header>
  );
}
