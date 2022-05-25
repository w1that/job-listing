import React, { useEffect, useState } from "react";
import styles from "../styles/TagItem.module.css";
import { mdiWindowClose } from "@mdi/js";
import Icon from "@mdi/react";

function TagItem({ tag, setTags, setOpacity, tags }) {
  const [style, setStyle] = useState({ opacity: 0, transition: "200ms" });
  const [deselectClicked, setDeselectClicked] = useState(false);

  function handleDeselectTag() {
    //let the animation plays
    setTimeout(() => {
      setTags((prev) => {
        return prev.filter((t) => t !== tag);
      });
    }, 300);
    //about animation
    setDeselectClicked(true);
    if (tags.length === 1) {
      setOpacity(0);
    }
  }

  //about animation
  useEffect(() => {
    setStyle({ opacity: 0, transition: "200ms" });
  }, [deselectClicked]);

  //about animation
  useEffect(() => {
    setTimeout(() => {
      setStyle({ opacity: 1, transition: "200ms" });
    }, 200);
  }, []);

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
