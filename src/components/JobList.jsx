import React, { useEffect, useState } from 'react'
import styles from '../styles/JobList.module.css'
import jobs from '../data.json'
import JobCard from '../components/JobCard'
function JobList({setTags, tags}) {

  const [shownJobs, setShownJobs] = useState([]);

  console.log(tags.filter(t=>{
    for (let i = 0; i < jobs.length; i++) {
      
    }
  }))

  useEffect(() => {
    if(tags.length===0){
      setShownJobs(jobs);
    }else{
      for (let i = 0; i < jobs.length; i++) {
        const jobsTags = [jobs[i].role, jobs[i].level, ...jobs[i].languages, ...jobs[i].tools];
        for (let j = 0; j < jobsTags.length; j++) {
          for (let c = 0; c < tags.length; c++) {
            if(tags[c]===jobsTags[j]){
              setShownJobs(prev=>[...prev,jobs[i]]);
            }
          }
        }
      }
    }
  }, [tags])
  

  return (
    <div className={styles.container}>
     {shownJobs.map(job=>(
       <JobCard setTags={setTags} tags={tags} job={job} />
     ))}
    </div>
  )
}

export default JobList