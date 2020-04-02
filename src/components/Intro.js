import React from "react"
import PropTypes from "prop-types"

class Intro extends React.Component {

  render() {
    const { title, text, page } = this.props;

    return (
      <section className="mb4 mb5-ns">
        <div className="mw7 center ph3">
          <h1 dangerouslySetInnerHTML={{ __html: title }} className="mt0" />
          {(text) != null ?
            <div dangerouslySetInnerHTML={{ __html: text }} />
          : null
          }
            {(page === 'index') ?
              <div className="mt5-ns">
                {/* <a href="https://www.instagram.com/baillieogrady/" target="_blank" rel="noopener noreferrer" className="white br2 tracked f7 fw7 ph3 pv2 no-underline box-shadow-none dim dib  bg-dark-pink ttu">Instagram</a>
                <a href="https://www.linkedin.com/in/baillieogrady/" target="_blank" rel="noopener noreferrer" className="white br2 tracked f7 fw7 ph3 pv2 no-underline box-shadow-none dim dib  bg-blue ml2 ttu">LinkedIn</a> */}
                <a href="https://www.youtube.com/channel/UCNfYodcO72M8CbCdR-pTnGg" target="_blank" rel="noopener noreferrer" className="white br2 tracked f7 fw7 ph3 pv2 no-underline box-shadow-none dim dib bg-red ttu">YouTube</a>
              </div>
              : null
            }
          </div>
      </section>
    )
  }
}

Intro.defaultProps = {
  title: ``,
  text: ``,
  page: ``,
}

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  page: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default Intro