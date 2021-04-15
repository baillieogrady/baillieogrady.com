import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import _ from 'lodash';

import Card from './Card';

const BlogListingSmall = ({ heading, postEdges }) => {


    return (
        <StaticQuery
            query={graphql`
                query BlogListingSmallQuery {
                    allMarkdownRemark(filter: {frontmatter: {template: {eq: "post", }}}, limit: 4, sort: { fields: [frontmatter___date], order: DESC }) {
                        edges {
                        node {
                            html
                            excerpt
                            frontmatter {
                                date
                                title
                                slug
                                type
                            }
                        }
                        }
                      }
                    }
                `}
            render={data => (
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
            )}
        />
    )
}

export default BlogListingSmall