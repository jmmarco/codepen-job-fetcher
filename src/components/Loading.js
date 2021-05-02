import React from "react";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "loading",
    };
  }

  componentDidMount() {
    const stopper = this.state.text + "...";
    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: "loading" }))
        : this.setState((prevState) => ({ text: prevState.text + "." }));
    }, 300);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { text } = this.state;
    return <p className="loader">{text}</p>;
  }
}
