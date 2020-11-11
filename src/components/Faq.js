import React  from "react";

import Lead from './Lead';
import Accordion from "./Accordion";


function Faq() {
    const data = {
        "content" : [
            { 
                "heading": "How do you build a WordPress theme?",
                "text": "Currently, I build WordPress themes using the Roots Sage starter theme combined with ACF Pro and TailwindCSS. My entire process is listed <a href='/building-a-wordpress-theme'>here.</a>"
            },
            {
                "heading": "Which design software do you prefer?",
                "text": "I prefer to use vector based design software like Adobe XD and Figma."
            },
            {
                "heading": "How long does it take to build a WordPress theme?",
                "text": "It really depends on the designs and the complexity of the UX. On average my turnover is around 2 weeks including testing and one round of amends."
            },
            {
                "heading": "How much does it cost to create a WordPress theme?",
                "text": "Again, this entirely depends on the scope of your project. I price based on unique content blocks and the complexity of the UX. The average price from all my projects is around <strong>£4,000</strong>."
            },
            {
                "heading": "Arn’t WordPress websites really slow?",
                "text": "Slow website speed is influenced by many factors. I recommend having a reliable hosting provider with < 500ms ttfb, a minimally coded theme with no redundant plugins and implemented optimisation like image lazy loading. On average my WordPress websites load in about 2 seconds with the faster ones loading in about <strong>1 second</strong>."
            }
        ]
    };

    return (
        <section>
            <div className="container py-16 lg:py-32 relative">
                <div className="flex flex-wrap -mx-6 lg:-mx-brand-4">
                    <Lead text={{ content: "FREQUENTLY ASKED"}} lineClass="bg-brand-primary-800" />
                    <div className="w-full lg: lg:w-7/12 px-6 lg:px-brand-4">
                        <h2 className={`mb-16 relative z-10`}>FAQ</h2>
                        <ul>
                            {data.content.map((content, i) => {
                                return <Accordion key={`accordion-${i}`} fields={content} />;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq