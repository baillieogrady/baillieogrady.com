import React from "react"

class Button extends React.Component {

  render() {
    const { text, link, classes, download } = this.props;
    const opts = {};

    download ? opts['download'] = '' : null;

    return (
      <a
        href={link}
        class={`f7 fw7 pv2  ph3 ttu white tracked br2 box-shadow-none dim ${classes}`}
        {...opts}
      >
        {text}
      </a>
    )
  }
}

export default Button