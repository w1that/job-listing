import React, { useEffect, useState } from "react";
import styles from "../styles/JobList.module.css";
import jobs from "./data.json";
import JobCard from "../components/JobCard";
function JobList({ setTags, tags }) {
  const [shownJobs, setShownJobs] = useState([]);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (tags.length > 0) {
      setShownJobs([]);
      jobs.forEach((job) => {
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
  }, [tags]);

  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    updateDimensions();
  }, [tags]);

  useEffect(() => {
    if (tags.length === 0) {
      setShownJobs(jobs);
    }
  }, [tags]);

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
        // as the tags field fades in, adjust the margin in order to keep t
        marginTop:
          (width <= 500 && (tags.length > 0 ? "20px" : "90px")) ||
          (width > 500 && tags.length===0?"102px":"20px"),
      }}
      className={styles.container}
    >
      {shownJobs.map((job) => (
        <JobCard setTags={setTags} tags={tags} job={job} />
      ))}
    </div>
  );
}

export default JobList;
