import React, { useEffect, useState } from "react";
import styles from "../styles/Pagination.module.css";
import data from "./data.json";
import left from "../assets/menu-left.png";
import right from "../assets/menu-right.png";

function Pagination({ setSelectedPage, selectedPage }) {
  const [pages, setPages] = useState([]);
  const howManyJobsAtPage = 4;
  //first 4 elements
  const [paginationPart, setPaginationPart] = useState({ from: 0, to: 3 });

  useEffect(() => {
    if (pages.length === 0) {
      for (let i = 0; i < data.length / howManyJobsAtPage; i++) {
        setPages((prev) => [...prev, i]);
      }
    }
  }, []);

  console.log(paginationPart, pages);

  return (
    <div className={styles.container}>
      
      {pages.slice(paginationPart.from, paginationPart.to).map((p) => {
        return (
          <PaginationElement
            id={p}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
        );
      })}

{paginationPart.from > 0 && (
        <LessElement
          paginationPart={paginationPart}
          setPaginationPart={setPaginationPart}
          setSelectedPage={setSelectedPage}
        />
      )}

      {paginationPart.to < pages.length && (
        <MoreElement
          paginationPart={paginationPart}
          setPaginationPart={setPaginationPart}
          setSelectedPage={setSelectedPage}
        />
      )}
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

function MoreElement({ setPaginationPart, paginationPart, setSelectedPage }) {
  function handleLoadMorePage() {
    const newPart = {
      from: paginationPart.from + 1,
      to: paginationPart.to + 1,
    };
    setPaginationPart(newPart);
    setSelectedPage((prev) => prev + 1);
  }

  return (
    <button onClick={() => handleLoadMorePage()} className={styles.moreButton}>
      <img src={right} width={30} alt={"right arrow"} />
    </button>
  );
}

function LessElement({ setPaginationPart, paginationPart, setSelectedPage }) {
  function handleLoadLessPage() {
    const newPart = {
      from: paginationPart.from - 1,
      to: paginationPart.to - 1,
    };
    setPaginationPart(newPart);
    setSelectedPage((prev) => prev - 1);
  }

  return (
    <button onClick={() => handleLoadLessPage()} className={styles.lessButton}>
      <img src={left} width={30} alt={"left arrow"} />
    </button>
  );
}

export default Pagination;
