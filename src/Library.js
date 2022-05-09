import styles from './Library.module.css';
import { LoadingIcon, UpButton, DownButton } from './Icons';
import React, { useEffect } from 'react';


const Book = ({ title, author, publicationYear }) => {
  return (
    <div className={styles.book}>
      <h2 className={styles.bookTitle}>{title}</h2>
      <p className={styles.bookDescription}>Published by <strong>{author}</strong> in <em>{publicationYear}</em></p>
    </div>
  );
}


const Library = ({setSearch}) => {

  const [isLoading, setIsLoading] = React.useState(true);
    
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)  
       
    },2000)  
   
  },[])

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.sort}>
          <span className={styles.sortLabel}>Sort by publication year</span>
          <span>
            <UpButton
              className={styles.arrow}
            />
            <DownButton
              className={styles.arrow}
            />
          </span>
        </div>

        <input onChange={(e)=>setSearch(e.target.value)}
          type="search"
          id="search"
          placeholder="Search books..."
          className={styles.search}
        />
      </header>
      <main>
        <h1>Book library</h1>
        {isLoading ?
          <LoadingIcon />
          :
          <div></div>
        }
      </main>
    </div>
  );
};

export default Library;