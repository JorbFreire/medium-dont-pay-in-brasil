import { useState } from 'react';
import styles from './styles.module.css';

export default function Header() {
  const [ search, setSearch ] = useState('');

  function submitSearch(event) {
    event.preventDefault();
    alert('it shal give a search result page');
  }

  return (
    <header className={styles.mainHeader} >
      <section className={styles.navBox}>
        <img src="/logo.svg" alt="logo"/>
        
        {/* there is any page to nav now */}
        {/* <nav>
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
        </nav> */}
      </section>

      <div />
      <div />

      <form onSubmit={submitSearch} className={styles.search}>
        <input
          id="search"
          type="text"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />

        <label htmlFor="search" >
          <img src="/search.svg" alt=""/>
        </label>
      </form>
    </header>
  )
}
