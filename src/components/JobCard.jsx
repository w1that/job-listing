import React from "react";
import styles from "../styles/JobCard.module.css";
import { mdiCircleSmall } from "@mdi/js";
import Icon from "@mdi/react";

function JobCard({ job, setTags, tags }) {
  const jobsTags = [job.role, job.level, ...job.languages, ...job.tools];

  function handleSelectTag(tag) {
    if (!tags.includes(tag)) {
      setTags((prev) => [...prev, tag]);
    }
  }

  return (
    <div className={styles.container}>
     {job.featured && <div className={styles.featuredCardIdentifier} />} 
      <div className={styles.innerContainer}>
        <img src={job.logo} className={styles.image} alt={'company brand logo'} />
        <div className={styles.infoWrapper}>
          <div className={styles.header}>
            <h1 className={styles.company}>{job.company}</h1>
            {(job.featured || job.new) && (
              <span className={styles.badgesWrapper}>
                {job.new && (
                  <label className={styles.newBadget}>{job.new && "NEW"}</label>
                )}
                {job.featured && (
                  <label className={styles.featuredBadget}>
                    {job.featured && "FEATURED"}
                  </label>
                )}
              </span>
            )}
          </div>
          <h2 className={styles.position}>{job.position}</h2>
          <span className={styles.detailInfo}>
            <label>{job.postedAt}</label>
            <Icon size={1} path={mdiCircleSmall} />
            <label>{job.contract}</label>
            <Icon size={1} path={mdiCircleSmall} />
            <label>{job.location}</label>
          </span>

          <div className={styles.divider} />
          <div className={styles.tagsWrapper}>
          {jobsTags.map((tag) => (
            <button onClick={() => handleSelectTag(tag)} className={styles.tag}>
              {tag}
            </button>
          ))}
        </div>
        </div>

        

        
      </div>
    </div>
  );
}

export default JobCard;
