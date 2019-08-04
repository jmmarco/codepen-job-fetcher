import React from 'react'
import ReactDOM from 'react-dom'
import { fetchJobs } from './utils/api'
// import PropTypes from 'prop-types'

export default class Job extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: null,
      hasError: false,
      loading: true,
    }

    this.onlyRemoteJobs = this.onlyRemoteJobs.bind(this)
  }

  componentDidMount() {
    fetchJobs()
      .then(jobs => {
        this.setState({
          jobs,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          jobs: null,
          hasError: true
        })
      })
  }

  onlyRemoteJobs() {
    const { jobs } = this.state
    return jobs && jobs.filter(j => j.remote)
  }


  render() {
    const { jobs, hasError, loading } = this.state

    if (hasError) {
      <h1>Something went wrong!</h1>
    }

    return (
      <React.Fragment>

        {loading ? <p>Loading...</p> :

          jobs.map(j => {
            return (
            <div className="job-description" key={j.hashid}>
              <h3>{j.company_name}</h3>
              <p>{j.title === '' ? 'None' : j.title}</p>
              <p>Description: {j.description === '' ? 'None' : j.description}</p>
              <p>Featured text: {j.featured_text === '' ? 'None' : j.featured_text}</p>
              <p>Url: {j.url === '' ? 'N/A' : <a href={j.url}>{j.url}</a>}</p>
              <p>Location: {j.location === '' ? 'None' : j.location}</p>
            </div>
            )
          })
        }
      </React.Fragment>
    )
  }
}