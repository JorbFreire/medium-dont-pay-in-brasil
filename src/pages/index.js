import Head from 'next/head';

import Header from '../components/Header';
import PostTag from '../components/PostTag';
import PostThumb from '../components/PostThumb';
import Advertisement from '../components/Advertisement';

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
          <PostTag>Ciência</PostTag>

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
        <section className={styles.posts}>
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
          <PostThumb />
        </section>

        <Advertisement />
      </main>

        <button className={styles.showMoreButton}>
          <p> Mostrar Mais </p>
          <span> \/ </span>
        </button>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
