import React from "react";
import { Link } from "gatsby";

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
      <div className="posts mw7 center ph3 flex flex-wrap justify-between">
        {postList.map(post => (
          <article key={post.title} className="mb4 m5-ns">
              {console.log(post)}
              <h2 className="f5 f4-ns ma0 mb2">
                  <Link to={post.path}>{post.title}</Link>
              </h2>
              <span className="silver f7 db">{post.date}</span>
              <p>
                  {post.excerpt}
              </p>
          </article>
        ))}
      </div>
    );
  }
}

export default PostListing;
