import React from "react";
import { Link } from "gatsby";

import { formatDate } from '../utils/global'

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className="posts mw7 center ph3 flex flex-wrap flex-column justify-between">
        {postList.map((post, i) => (
          <article key={i} className="mt3 mt4-ns">
            <h3 className="ma0 mb2">
              <Link to={`/${post.slug}`} className="hover-blue dark-gray">{post.title}</Link>
            </h3>
            <time className="updated dib f7 ttu tracked silver">{formatDate(post.date)}</time>
          </article>
        ))}
      </div>
    );
  }
}

export default PostListing;
