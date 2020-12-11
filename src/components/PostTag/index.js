import styles from './styles.module.css';

export default function PostTag({ children }) {
  return (
    <div className={styles.tag}>
      <span> {children} </span>
    </div>
  )
}
