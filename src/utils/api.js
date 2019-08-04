export function fetchJobs() {
  const endpoint = 'https://codepen.io/jobs.json'
  return fetch (endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data) {
        throw new Error('Something went wrong')
      }
      return data.jobs
    })
}