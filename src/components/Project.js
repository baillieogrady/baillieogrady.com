import React from "react"
import Img from "gatsby-image";
import Button from '../components/Button';

const Project = ({ data, page }) => {
  return (
    <article key={data.id}>
      <a href={data.frontmatter.url} target="_blank" rel="noreferrer">
        <Img fluid={data.frontmatter.thumbnail.childImageSharp.fluid} />
      </a>
      <header>
        <h2 className="mt3">{data.frontmatter.title}</h2>
      </header>
      <div className="mt3">
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
      <div>
        {data.frontmatter.type === 'project' && page !== 'index' ?
          <Button link={data.frontmatter.url} text="VISIT" classes="bg-blue" />
          :
          null}
        {data.frontmatter.type === 'theme' ?
          <div>
            <Button link={data.frontmatter.demo} text="DEMO" classes="mr2 bg-blue " />
            <Button link={data.frontmatter.code} text="DOCS" classes="mr2 bg-dark-gray" />
            <Button link={`../${data.frontmatter.download}`} download text="DOWNLOAD" classes="bg-red" />
          </div>
          :
          null
        }
      </div>
    </article>
  )
}

export default Project