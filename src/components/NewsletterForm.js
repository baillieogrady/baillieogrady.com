import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"

export default class MailChimpForm extends React.Component {
    constructor() {
        super()
        this.state = { email: "", result: null }
    }
    _handleSubmit = async e => {
        e.preventDefault()
        const result = await addToMailchimp(this.state.email)
        this.setState({ result: result })
    }
    handleChange = event => {
        this.setState({ email: event.target.value })
    }
    render() {
        return this.state.result !== null ? (
            <p className={`text-green-500 font-medium`}>{this.state.result.msg}</p>
        ) : (
                <form onSubmit={this._handleSubmit}>
                    <label className="text-xs hidden">Email*</label>
                    <div className="flex items-center shadow-brand-xs  p-2 rounded-lg bg-white">
                        <input type="email" placeholder="foo@bar.com" className="block rounded-lg h-10 pl-2 w-full text-black outline-none" name="email" id="email" onChange={this.handleChange} />
                        <input type="submit" value="Subscribe" className="btn py-2 px-4 hover:bg-brand-primary-900 cursor-pointer transition duration-200 ease-in-out" />
                    </div>
                </form>
            )
    }
}