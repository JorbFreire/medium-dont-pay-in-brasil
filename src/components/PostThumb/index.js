import PostTag from '../PostTag';
import styles from './styles.module.css';

export default function PostThumbs({
  tag,
  title,
  description,
  readingTime
}) {
  return (
    <div className={styles.thumbBox}>
      <section className={styles.thumb}>
        <PostTag> Ciência </PostTag>
      </section>

      <h2>Surfando: Favoritando a Internet</h2>

      <p>
        A Internet é um sistema global de redes de computadores 
        interligadas  com o propósito de servir progressivamente 
        usuários no mundo inteiro.
      </p>

      <div className={styles.underLine} />

      <footer className={styles.extra}>
        <div className={styles.readingTime}>
          <img src="/clock.svg" alt="clock"/>
          <span>5 min de leitura</span>
        </div>

        <span> Leia mais {'>'} </span>
      </footer>
    </div>
  )
}
