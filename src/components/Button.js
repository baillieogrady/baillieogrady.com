import React from "react"

class Button extends React.Component {

  render() {
    const { text, link, classes } = this.props;

    return (
    <a href={link} target="_blank" class={`bg-blue f7 fw7 pv2  ph3 ttu white tracked br2 box-shadow-none dim ${classes}`}>
        {text}
    </a>
    )
  }
}

export default Button