import React from "react"

class Button extends React.Component {

  render() {
    const { text, link, classes } = this.props;

    return (
      <a
        href={link}
        className={`${classes} f7 fw7 pv2 ph3 ttu white tracked br2 dim dib hover-white`}
      >
        {text}
      </a>
    )
  }
}

export default Button