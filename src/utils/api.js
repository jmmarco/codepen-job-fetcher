export function fetchJobs() {
  const endpoint = "https://codepen.io/jobs.json";
  return fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!data) {
        throw new Error("Something went wrong");
      }
      return data.jobs;
    });
}
