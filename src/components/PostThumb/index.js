import { useEffect, useState } from 'react';
import api from '../../services/api';

import PostTag from '../PostTag';
import styles from './styles.module.css';

// authorName:
// body: 
// description:
// heroImage:
// publishDate:
// readinTimeInMin:
// slug:
// title:
export default function PostThumbs({ post, thumbId }) {
  const [ thumb, setThumb ] = useState({});
  
  useEffect(() => {
    async function getThumb() {
      const response = await api.get(`assets/${thumbId}`);
      setThumb(response.data.fields);
    }
    getThumb();
  }, [thumbId]);

  useEffect(() => {
    console.log(thumb);
  }, [thumb]);

  return (
    <div className={styles.thumbBox}>
      <section
        style={ thumb.file ? {
          backgroundImage: `url(${thumb.file.url})`,
          backgroundSize: 'cover'
        } : null }
        className={styles.thumb}
      >
        {/* <PostTag> Ciência </PostTag> */}
      </section>

      <h2> {post.title} </h2>
      <p> {post.description} </p>
      <div className={styles.underLine} />

      <footer className={styles.extra}>
        <div className={styles.readingTime}>
          <img src="/clock.svg" alt="clock"/>
          <span> {post.readinTimeInMin} min de leitura</span>
        </div>

        <span> Leia mais {'>'} </span>
      </footer>
    </div>
  )
}
