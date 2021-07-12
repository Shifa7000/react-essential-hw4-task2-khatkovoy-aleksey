import React from "react";
import "./index.css";

class TextBlock extends React.Component {
  componentDidMount() {
    alert("componentDidMount");
  }
  componentWillUnmount() {
    alert("componentWillUnmount");
  }
  render() {
    return <p className="TextBlock">{this.props.children}</p>;
  }
}

export default TextBlock;
