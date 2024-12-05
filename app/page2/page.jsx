"use client"

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page() {
    const router = useRouter();

    return (
        <div>
            <h1>Page 2</h1>
            <ul>
                <li>Routing</li>
                <li>Locale CSS Module</li>
            </ul>
            <hr />
            <div className={styles.buttons}>
                <button type="button" onClick={() => router.back()}>Back</button>
                <button type="button" onClick={() => router.push("/")}>Home</button>
                <button type="button" onClick={() => router.push("/page1")}>Page 1</button>
            </div>
        </div>
    );
}
