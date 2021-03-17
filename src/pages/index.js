import Head from 'next/head';

import api from '../services/api';

import Header from '../components/Header';
import PostTag from '../components/PostTag';
import PostThumb from '../components/PostThumb';
import Advertisement from '../components/Advertisement';

import styles from '../styles/Home.module.css';

export default function Home({ posts, orderedThumbs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title> Coffe tips </title>
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
          {posts.map((post, index) => (
            <PostThumb
              key={post.sys.id}
              _id={post.sys.id}
              thumb={orderedThumbs[index]}
              post={post.fields}
            />
          ))}
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

export async function getStaticProps(context) {
  try {
    const postsResponse = await api.get('/entries')
    const posts = postsResponse.data.items;
    
    let orderedThumbs = []
    for(let index = 0; index < posts.length; index++) {
      const thumbResponse = await api.get(
        `assets/${posts[index].fields.heroImage.sys.id}`
      );
      const thumb = thumbResponse.data.fields;
      orderedThumbs.push(thumb);
    }

    return {
      props: {
        posts,
        orderedThumbs
      },
      revalidate: 7200
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        posts: [],
        orderedThumbs: []
      }
    }
  }
}
