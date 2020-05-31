import React from "react"

import { Link } from "gatsby"

class Intro extends React.Component {

  render() {
    const { title, text, page } = this.props;

    return (
      <section className={`${page === 'index' ? "" : "mv5"}`}>
        <div className="mw7 center ph3">
          <h1 dangerouslySetInnerHTML={{ __html: title }} className={`mt0 ${page === 'index' ? "" : ""}`} />
          {(text) != null ?
            <div dangerouslySetInnerHTML={{ __html: text }} className="f4-ns pr7-ns" />
            : null
          }
        </div>
      </section>
    )
  }
}

export default Intro