import React from "react"

import { Link } from "gatsby"

class Intro extends React.Component {

  render() {
    const { title, text, page } = this.props;

    return (
      <section className="mv5 mb6-ns">
        <div className="mw7 center ph3">
          <h1 dangerouslySetInnerHTML={{ __html: title }} className="mt0 fw6" />
          {(text) != null ?
            <div dangerouslySetInnerHTML={{ __html: text }} />
            : null
          }
          {/* {page === 'index' ?
            <div className="mt4 mt0-ns">
              <Link to="/contact" className="white br2 tracked f7 fw7 ph3 pv2 no-underline  dim dib bg-green ttu">I'm available</Link>
            </div>
            : null
          } */}
        </div>
      </section>
    )
  }
}

export default Intro