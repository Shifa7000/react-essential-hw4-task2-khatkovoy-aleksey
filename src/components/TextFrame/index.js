import React from "react";
import TextBlock from "../TextBlock";
import "./index.css";

class TextFrame extends React.Component {
  buttonTextArr = ["Show", "Hide"];
  state = { visible: true, buttonText: this.buttonTextArr[1] };
  showHideHandle(e) {
    this.setState({ buttonText: this.buttonTextArr[Number(!this.state.visible)], visible: !this.state.visible });
  }
  render() {
    return (
      <div className="TextFrame">
        <button onClick={(e) => this.showHideHandle(e)}>{this.state.buttonText}</button>
        {this.state.visible && (
          <TextBlock>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe itaque recusandae autem inventore est aliquam dolore, illo perspiciatis nisi
            corporis, deleniti odio eius incidunt nostrum officiis sunt libero unde! Sapiente.
          </TextBlock>
        )}
      </div>
    );
  }
}

export default TextFrame;
