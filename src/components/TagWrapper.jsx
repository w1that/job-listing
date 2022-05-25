import React, { useEffect, useState } from "react";
import styles from "../styles/TagWrapper.module.css";
import TagItem from "../components/TagItem";

function TagWrapper({ tags, setTags }) {
 
  const [style, setStyle] = useState({opacity:0, transition:"200ms"})

  useEffect(() => {
    setTimeout(() => {
      setStyle({opacity:1, transition:"200ms"})
    }, 300);
  }, [])
  
  
  function handleClearTags(){
    setTags([]);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <TagItem setTags={setTags} tag={tag} />
        ))}
      </div>

      <label onClick={handleClearTags} className={styles.clearButton}>Clear</label>
    </div>
  );
}

export default TagWrapper;
