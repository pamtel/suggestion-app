import styles from "./page.module.css";
import Suggestions from "./pages";

export default function Home() {
  return (
    <main className={styles.main}>
      <Suggestions />
    </main>
  );
}
