import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.mainHeader} >
      <section className={styles.navBox}>
        <img src="/logo.svg" alt="logo"/>
        
        <nav>
          <a href="/">
            Dados
          </a>
          <a href="/">
            Ciência
          </a>
          <a href="/">
            Codigo
          </a>
          <a href="/">
            Tutoriais
          </a>
          <a href="/">
            Artigos
          </a>
        </nav>
      </section>

      <div />
      <div />

      <section className={styles.search}>
        <input
          id="search"
          type="text"
        />
        
        <label htmlFor="search" >
          <img src="/search.svg" alt=""/>
        </label>
      </section>
    </header>
  )
}
