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
            <p className={`text-green-500 font-medium text-xl`}>{this.state.result.msg}</p>
        ) : (
                <form onSubmit={this._handleSubmit}>
                    <label className="text-xs hidden">Email*</label>
                    <div className="flex items-center justify-between shadow-brand-xs p-2 rounded-lg w-full bg-brand-grey-300">
                        <input type="email" placeholder="Email address" className="w-1/2 xs-w-auto block rounded-lg h-10 px-2 text-black placeholder-brand-black-400 outline-none flex-grow bg-transparent" name="email" id="email" onChange={this.handleChange} />
                        <input type="submit" value="Sign up" className="btn py-2 px-4 hover:bg-brand-primary-900 cursor-pointer transition duration-200 ease-in-out" />
                    </div>
                </form>
            )
    }
}