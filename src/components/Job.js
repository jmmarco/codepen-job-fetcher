import React from "react";
import ReactDOM from "react-dom";
import JobDetail from "./JobDetail";
import { fetchJobs } from "../utils/api";
import Switch from "./Switch";
import Header from "./Header";
import Loading from "./Loading";

export default class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null,
      hasError: false,
      loading: true,
      remote: false,
      errorMessage: "",
    };
    this.toggleRemote = this.toggleRemote.bind(this);
  }

  componentDidMount() {
    fetchJobs()
      .then((jobs) => {
        this.setState({
          jobs,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("fired", error);
        this.setState({
          jobs: null,
          hasError: true,
          errorMessage: error.message,
        });
      });
  }

  toggleRemote() {
    this.setState((state) => ({
      loading: !state.loading,
    }));

    setTimeout(() => {
      this.setState((state) => ({
        remote: !state.remote,
        loading: !state.loading,
      }));
    }, 1000);
  }

  render() {
    const { jobs, hasError, loading, remote, errorMessage } = this.state;

    console.log({ hasError });

    if (hasError) {
      return (
        <div>
          <h1 className="error">{`Something went wrong: ${errorMessage}`}</h1>
        </div>
      );
    }

    return (
      <React.Fragment>
        <Header remote={remote} />
        <Switch toggleRemote={this.toggleRemote} />
        {loading ? (
          <Loading />
        ) : (
          <main>
            {remote
              ? jobs &&
                jobs
                  .filter((j) => j.remote)
                  .map((j) => <JobDetail key={j.hashid} job={j} />)
              : jobs && jobs.map((j) => <JobDetail key={j.hashid} job={j} />)}
          </main>
        )}
      </React.Fragment>
    );
  }
}
