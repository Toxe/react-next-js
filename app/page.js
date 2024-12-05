import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Main Page</h1>
      </main>
      <footer className={styles.footer}>
        <a href="https://nextjs.org/docs/app/getting-started/installation">based on Next.js Getting Started</a>
      </footer>
    </div>
  );
}
