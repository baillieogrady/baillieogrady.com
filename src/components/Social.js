
import React from "react"

import Email from '../images/svg/email.inline.svg'
import Instagram from '../images/svg/instagram.inline.svg'
import LinkedIn from '../images/svg/linkedin.inline.svg'

class Social extends React.Component {

  render() {
    const { text, link, classes } = this.props;

    return (
        <ul className="inline-flex justify-end lg:w-full mt-2">
            <li>
                <a href="mailto:hello@baillieogrady.com" target="_blank" className="text-grey-100 block">
                    <Email/>
                </a>
            </li>
            <li className="ml-6">
                <a href="https://www.linkedin.com/in/baillieogrady/" target="_blank" className="text-grey-100 block">
                    <LinkedIn />
                </a>
            </li>
            <li className="ml-6">
                <a href="https://www.instagram.com/baillieogrady/" target="_blank" className="text-grey-100 block">
                    <Instagram/>
                </a>
            </li>
        </ul>
    )
  }
}

export default Social