import React, { useEffect, useState } from "react";
import styles from "../styles/JobList.module.css";
import jobs from "./data.json";
import JobCard from "../components/JobCard";
function JobList({ setTags, tags, selectedPage }) {
  const [shownJobs, setShownJobs] = useState([]);
  const [opacity, setOpacity] = useState(1);
  const howManyJobsAtPage = 4;
  const [from, setFrom] = useState(selectedPage * howManyJobsAtPage);

  useEffect(() => {
    setFrom(selectedPage * howManyJobsAtPage);
  }, [selectedPage]);

  useEffect(() => {
    if (tags.length > 0) {
      setShownJobs([]);
      jobs.slice(from, from + howManyJobsAtPage).forEach((job) => {
        const jobsTags = [job.role, job.level, ...job.languages, ...job.tools];
        if (
          tags.every((element) => {
            return jobsTags.includes(element);
          })
        ) {
          setShownJobs((prev) => [...prev, job]);
        }
      });
    }
  }, [tags, from]);

  useEffect(() => {
    // if (tags.length === 0) {
    //   setShownJobs(jobs);
    // }
    if (tags.length === 0) {
      setShownJobs(jobs.slice(from, from + howManyJobsAtPage));
    }
  }, [tags, from]);

  // useEffect(() => {
  //   setShownJobs(jobs.slice(from,from+howManyJobsAtPage))
  // }, [selectedPage, from])

  useEffect(() => {
    setOpacity(0.5);
    setTimeout(() => {
      setOpacity(1);
    }, 300);
  }, [shownJobs.length]);

  return (
    <div
      style={{
        opacity: opacity,
        transition: opacity === 1 && "300ms",
      }}
      className={styles.container}
    >
      {shownJobs.length === 0 && (
        <div className={styles.notFoundContainer}
        >
          <p className={styles.notFoundText}>No Jobs Found at This Page</p>
        </div>
      )}
      {shownJobs.map((job) => (
        <JobCard setTags={setTags} tags={tags} job={job} />
      ))}
    </div>
  );
}

export default JobList;
