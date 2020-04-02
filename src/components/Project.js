import React from "react"
import Img from "gatsby-image";
import Button from '../components/Button';

const Project = ({ data, button }) =>{
  return (
    <article key={data.id}>
      <a href={data.frontmatter.url} target="_blank" rel="noreferrer">
        <Img fluid={data.frontmatter.thumbnail.childImageSharp.fluid} />
      </a>
      <header>
        <h3 className="mt3">{data.frontmatter.title}</h3>
      </header>
      <div className="mt3">
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
      <div>
        {button != false ? 
        <Button link={data.frontmatter.url} text="VISIT" />
        :
        null}
      </div>
    </article>
  )
}

export default Project