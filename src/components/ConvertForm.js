// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
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
                action="https://formspree.io/xpzynvpj"
                method="POST"
                className="mt-6">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-brand-46 mt-6">
                        <label className="text-xs" htmlFor="name">Name*</label>
                        <input type="text" placeholder="Joe Bloggs" required className="block rounded-lg shadow-brand-xs h-10 pl-2 w-full mr-8" id="name" name="name" />
                    </div>
                    <div className="w-full lg:w-brand-46 mt-6">
                        <label className="text-xs" htmlFor="email">Email*</label>
                        <input type="email" placeholder="joe.bloggs@gmail.com" required className="block rounded-lg shadow-brand-xs h-10 pl-2 w-full" name="email" id="email" />
                    </div>
                    <div className="w-full mt-6">
                        <label className="text-xs" htmlFor="budget">Budget*</label>
                        <select className="block rounded-lg shadow-brand-xs h-10 pl-2 w-full bg-white appearance-none" required id="budget" name="budget">
                            <option value="£1,500 - £3,000">£2,000 - £4,000</option>
                            <option value="£3,000 - £6,000">£5,000 - £7,000</option>
                            <option value="£7,000 - £10,000">£10,000 +</option>
                        </select>
                    </div>
                    <div className="w-full mt-6">
                        <label className="text-xs" htmlFor="designs">Designs*</label>
                        <input type="url" required placeholder="Figma, Dropbox, Invision link ..." className="block rounded-lg shadow-brand-xs p-2 w-full bg-white" id="designs" name="designs" />
                    </div>
                    {/* <fieldset className="w-full border border-brand-grey-400 p-3 rounded-lg mt-6">
                        <legend className="text-xs" htmlFor="designs">Designs*</legend>
                        <div className="w-full">
                            <label className="text-xs hidden" for="designs">Designs*</label>
                            <input type="file" placeholder="PSD, XD, Figma file..." className="block rounded-lg shadow-brand-xs p-2 w-full bg-white" id="designs" name="designs-files" />
                        </div>
                        <p className="m-0 text-center py-3 w-full text-black font-bold text-sm">OR</p>
                        <div className="w-full">
                            <input type="url" placeholder="Figma, Dropbox, Invision link ..." className="block rounded-lg shadow-brand-xs p-2 w-full bg-white" name="designs-url" />
                        </div>
                    </fieldset> */}
                    <div className="w-full mt-6">
                        <label className="text-xs" htmlFor="message">Message*</label>
                        <textarea placeholder="Tell me a little about your WordPress project..." className="block rounded-lg shadow-brand-xs p-2 w-full h-48" id="message" name="message" />
                    </div>

                </div>
                <div className="mt-8 text-green-500 font-medium">
                    {status === "SUCCESS" ? <p className="text-xl">Message received, I'll be in touch soon!</p> : <div className="w-full lg:w-brand-46 mt-6">
                        <input type="submit" value="Get started" className="btn cursor-pointer hover:bg-brand-primary-900 transiton duration-200 ease-in-out" />
                    </div>}
                    {status === "ERROR" && <p className="text-red-600">Ooops! There was an error.</p>}
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
