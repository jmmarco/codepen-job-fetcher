import React from 'react'
import ReactDOM from 'react-dom'
import JobDetail from './JobDetail'
import { fetchJobs } from '../utils/api'
import Switch from './Switch'
import Header from './Header'
import Loading from './Loading'

export default class Job extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: null,
      hasError: false,
      loading: true,
      remote: false,
    }
    this.toggleRemote = this.toggleRemote.bind(this)
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

  toggleRemote() {

    this.setState(state => ({
      loading: !state.loading
    }))

    setTimeout(() => {
      this.setState(state => ({
        remote: !state.remote,
        loading: !state.loading
      }))
    }, 1000)
  }

  render() {
    const { jobs, hasError, loading, remote } = this.state


    if (hasError) {
      <h1>Something went wrong!</h1>
    }

    return (
      <React.Fragment>
      <Header remote={remote} />
      <Switch toggleRemote={this.toggleRemote}/>
      { loading ?
        <Loading /> :
        <main>
        { remote
          ? jobs && jobs.filter(j => j.remote).map(j => <JobDetail key={j.hashid} job={j}/>)
          : jobs && jobs.map(j => <JobDetail key={j.hashid} job={j}/>)
        }
        </main>
      }

      </React.Fragment>
    )
  }
}



