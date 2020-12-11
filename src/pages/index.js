import Head from 'next/head';

import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className={styles.highlights}>
        <div className={styles.textBox}>
          <div className={styles.tag}>
            <span> Ciência </span>
          </div>

          <h1> Surfando: Favoritando a Internet </h1>
          <p>
            A Internet é um sistema global de redes de computadores 
            interligadas  com o propósito de servir progressivamente 
            usuários no mundo inteiro.
          </p>

          <div className={styles.underLine} />

          <div className={styles.extra}>
            <div className={styles.readingTime} >
              <img src="/clock.svg" alt="clock"/>
              <p>5 min de leitura</p>
            </div>

            <p>Leia mais {'>'} </p>
          </div>
        </div>
        <div /> <div /> <div /> <div />
      </section>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
