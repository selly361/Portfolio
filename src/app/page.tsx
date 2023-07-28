// "use client"

import { Hero } from "components"
import Image from "next/image"
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  )
}
