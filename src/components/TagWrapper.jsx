import React from "react";
import styles from "../styles/TagWrapper.module.css";
import TagItem from "../components/TagItem";

function TagWrapper({ tags, setTags }) {

  function handleClearTags(){
    setTags([]);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <TagItem tag={tag} />
        ))}
      </div>

      <label onClick={handleClearTags} className={styles.clearButton}>Clear</label>
    </div>
  );
}

export default TagWrapper;
