import Head from 'next/head';
import Image from 'next/image'
import ReactMarkdown from 'react-markdown';

import api from '../../services/api';

import Header from '../../components/Header';
import Advertisement from '../../components/Advertisement';

import styles from '../../styles/Post.module.css';

export default function Post({ post, thumb }) {
  const publishDate = new Date(post.publishDate);
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return(
    <div className={styles.container}>
      <Head>
        <title> Coffe tips - Post Title </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Advertisement />

        <div className={styles.post}>
          <h1> {post.title} </h1>
          <p className={styles.description}>
            {post.description}
          </p>

          <section className={styles.extraInfo}>
            <div className={styles.author}>
              <img src="/author.svg" alt="clock"/>
              <span> {post.authorName} </span>
            </div>

            <div className={styles.date}>
              <img src="/calendar.svg" alt="calendar"/>
              <span>
                {publishDate.getDate()}
                &nbsp;de&nbsp;
                {months[publishDate.getMonth()]}
                ,&nbsp;
                {publishDate.getFullYear()}
              </span>
            </div>

            <div className={styles.readingTime}>
              <img src="/clock.svg" alt="/clock"/>
              <span> {post.readinTimeInMin} min de leitura</span>
            </div>
          </section>

          <img src={thumb.file.url} alt={thumb.description} />
          
          <section className={styles.postSection}>
            <ReactMarkdown>
              {post.body}
            </ReactMarkdown>
          </section>
        </div>

        <Advertisement />
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await api.get('/entries');
  const posts = response.data.items;
  let paths = [];
  
  for(let index = 0; index < posts.length; index++)
    paths.push({ params: {
      slug: posts[index].sys.id
    }});
  console.log
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  try {
    const { slug } = context.params;
    
    const response = await api.get(`/entries/${slug}`);
    const post = response.data.fields;
    
    const thumbResponse = await api.get(
      `assets/${post.heroImage.sys.id}`
    );
    
    const thumb = thumbResponse.data.fields;

    return {
      props: {
        post,
        thumb
      },
      revalidate: 604800
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        post: [],
      }
    }
  }
}
