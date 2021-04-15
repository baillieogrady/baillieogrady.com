import React from "react";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xzbjwnee"
                method="POST" className="mt-6">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-brand-46 mt-6">
                        <label className="text-xs" htmlFor="name">Name*</label>
                        <input type="text" placeholder="Joe Bloggs" className="block rounded-lg shadow-brand-xs h-10 pl-2 w-full mr-8 bg-brand-grey-100" name="name" id="name" />
                    </div>
                    <div className="w-full lg:w-brand-46 mt-6">
                        <label className="text-xs">Email*</label>
                        <input type="email" placeholder="joe.bloggs@gmail.com" className="block rounded-lg shadow-brand-xs h-10 pl-2 w-full bg-brand-grey-100" name="email" id="email" />
                    </div>
                    <div className="w-full mt-6">
                        <label className="text-xs">Message*</label>
                        <textarea placeholder="Tell me a little about your WordPress project..." className="block rounded-lg shadow-brand-xs p-2 w-full h-48 bg-brand-grey-100" name="message" id="message" />
                    </div>
                    <input type="text" name="_gotcha" style={{ 'display': 'none' }} />
                </div>
                <div className="mt-8 text-green-500 font-medium">
                    {status === "SUCCESS" ? <p className="text-xl">Message received, I'll be in touch soon!</p> : <div className="w-full lg:w-brand-46 mt-6">
                        <input type="submit" value="Send" className="btn hover:bg-brand-primary-900 cursor-pointer transition duration-200 ease-in-out" />
                    </div>}
                    {status === "ERROR" && <p className="text-red-600 text-xl">Ooops! There was an error.</p>}
                </div>
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}