import React from "react"

class Intro extends React.Component {

  render() {
    const { title, text, page } = this.props;

    return (
      <section className="mb4 mb5-ns">
        <div className="mw7 center ph3">
          <h1 dangerouslySetInnerHTML={{ __html: title }} className="mt0" />
          {(text) != null ?
            <div dangerouslySetInnerHTML={{ __html: text }} className={`${page === 'themes' ? 'bg-lightest-blue pa3 br2 nm' : null}`} />
            : null
          }
          {page === 'index' ?
            <div className="mt5-ns">
              <a href="https://www.youtube.com/channel/UCNfYodcO72M8CbCdR-pTnGg" target="_blank" rel="noopener noreferrer" className="white br2 tracked f7 fw7 ph3 pv2 no-underline box-shadow-none dim dib bg-red ttu">YouTube</a>
            </div>
            : null
          }
        </div>
      </section>
    )
  }
}

export default Intro