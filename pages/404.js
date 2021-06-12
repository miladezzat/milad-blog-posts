import Link from "next/link";
import styles from './404.module.css';
// pages/404.js
export default function Custom404() {
    return <h1 className={styles.h1}>404 - Page Not Found <Link href="/"><a>← Back to home</a></Link></h1>
}