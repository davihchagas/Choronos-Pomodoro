import { HistoryIcon, HouseIcon, Settings2Icon, SunIcon } from 'lucide-react';
import styles from'./styles.module.css';


export function Menu () {
  return <nav className={styles.menu}>
      <a className={styles.menuLink} href="#">
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#">
        <Settings2Icon />
      </a>
      <a className={styles.menuLink} href="#">
        <SunIcon />
      </a>
    </nav>
}