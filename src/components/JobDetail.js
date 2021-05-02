import React from "react";

const styles = {
  h3: {
    flexGrow: 3,
  },
};

export default function JobDetail(props) {
  const { job } = props;

  return (
    <div className="job-description">
      <h3 style={styles.h3}>{job.company_name}</h3>
      <p>{job.title === "" ? "None" : job.title}</p>
      <p>Description: {job.description === "" ? "None" : job.description}</p>
      <p>
        Featured text: {job.featured_text === "" ? "None" : job.featured_text}
      </p>
      <p>Url: {job.url === "" ? "N/A" : <a href={job.url}>{job.url}</a>}</p>
      <p>Location: {job.location === "" ? "None" : job.location}</p>
    </div>
  );
}
