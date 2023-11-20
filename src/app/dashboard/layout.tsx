import React from 'react';
import Dsidebar from '../ui/dashboard/dsidebar/dsidebar';
import Dnavbar from '../ui/dashboard/dnavbar/dnavbar';
import styles from '../ui/dashboard/dashboard.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Dsidebar />
      </div>
      <div className={styles.content}>
        <Dnavbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
