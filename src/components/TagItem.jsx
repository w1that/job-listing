import React, { useEffect, useState } from "react";
import styles from "../styles/TagItem.module.css";
import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";

function TagItem({ tag, setTags }) {

  const [style, setStyle] = useState({opacity:0, transition:"200ms"})

  function handleDeselectTag(){
    setTags(prev=>{
     return prev.filter(t=>t!==tag)
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setStyle({opacity:1, transition:"200ms"})
    }, 300);
  }, [])
  

  return (
    <div className={styles.container} style={style}>
      <label>{tag}</label>
      <button onClick={handleDeselectTag} className={styles.closeButton}>
        <Icon path={mdiWindowClose} size={1} />
      </button>
    </div>
  );
}

export default TagItem;
