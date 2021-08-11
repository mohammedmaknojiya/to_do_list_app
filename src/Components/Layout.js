import React from 'react';
import AddTask from './AddTask';
import styles from './Layout.module.css';
const Layout = () =>{
    return(
        <>
        <div className={styles.layoutBorder}>
            <h1 className={styles.success}>To Do List </h1>
            <hr className={`${styles.success} ${styles.lineStyle}`}/>
            <AddTask/>
           
        </div>
        </>
    )
}

export default Layout;