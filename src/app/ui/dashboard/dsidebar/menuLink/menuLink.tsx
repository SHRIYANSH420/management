"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated import
import styles from './menuLink.module.css';

interface MenuLinkProps {
  item: {
    path: string;
    icon: React.ReactNode;
    title: string;
  };
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} passHref legacyBehavior>
      <a className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}>
        {item.icon}
        {item.title}
      </a>
    </Link>
  );
};

export default MenuLink;
