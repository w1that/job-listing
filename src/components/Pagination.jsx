import React, { useEffect, useState } from "react";
import styles from "../styles/Pagination.module.css";
import data from "./data.json";

function Pagination({ setSelectedPage, selectedPage }) {
  const [pages, setPages] = useState([]);
  const howManyJobsAtPage = 4;

  useEffect(() => {
    for (let i = 0; i < data.length / howManyJobsAtPage; i++) {
        setPages((prev) => [...prev, i]);
    }
  }, []);

  useEffect(() => {
    console.log('useeffect')
  }, [])

  return (
    <div className={styles.container}>
      {pages.map((p) => {
        return (
          <PaginationElement
            id={p}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        );
      })}
    </div>
  );
}

function PaginationElement({ id, selectedPage, setSelectedPage }) {
   
    
  return (
    <button
      onClick={() => setSelectedPage(id)}
      className={
        id === selectedPage
          ? styles.paginateButtonActive
          : styles.paginateButton
      }
    >
      {id + 1}
    </button>
  );
}

export default Pagination;
