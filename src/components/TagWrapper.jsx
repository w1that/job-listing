import React, { useEffect, useState } from "react";
import styles from "../styles/TagWrapper.module.css";
import TagItem from "../components/TagItem";

function TagWrapper({ tags, setTags }) {
  const [opacity, setOpacity] = useState(0);
  const [cleaned, setCleaned] = useState(false);

  function handleClearTags() {
    //about animation
    setCleaned(true);
    //let the animation plays
    setTimeout(() => {
      setTags([]);
    }, 300);
  }
  //about animation
  useEffect(() => {
    setOpacity(0);
  }, [cleaned]);

  //about animation
  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <div
      style={{ transition: "300ms", opacity: opacity }}
      className={styles.container}
    >
      <div className={styles.tagsWrapper}>
      <div className={styles.tags}>
        {tags.map((tag) => {
          return (
            <TagItem
              setOpacity={setOpacity}
              tags={tags}
              key={tag}
              setTags={setTags}
              tag={tag}
            />
          );
        })}
        
      </div>

      <div className={styles.gradient} />
      </div>
      
      <label onClick={handleClearTags} className={styles.clearButton}>
        Clear
      </label>
    </div>
  );
}

export default TagWrapper;
