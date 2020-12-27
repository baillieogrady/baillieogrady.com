import React from "react";

import Card from './Card';
import Lead from './Lead';

const TagListing = ({ heading, data, tag }) => {
    return (
        <div>
            <div className="two-column py-16 lg:py-32 relative bg-brand-grey-300">
                <div className="container">
                    <div className="flex flex-wrap -mx-6 lg:-mx-brand-4">
                        <Lead text={{ content: tag.toUpperCase(), class: "" }} lineClass="bg-brand-primary-800" />
                        <div className="w-full lg:w-9/12 px-6 lg:px-brand-4">
                            {heading.text.length > 1 ?
                                <h2 className="mb-16">{heading.text}</h2>
                                : null
                            }
                            <div className="flex flex-wrap justify-between">
                                {data.allMarkdownRemark.edges.map((item, i) => {
                                    let data = item.node;
                                    return <Card type="post" post={data} key={`blogCard-${i}`} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagListing