import React from "react"
import Img from "gatsby-image";
import Button from './Button';

const Theme = ({ data, page }) => {
  return (
    <article key={data.id}>
      <a href={data.frontmatter.url} target="_blank" rel="noreferrer">
        <Img fluid={data.frontmatter.thumbnail.childImageSharp.fluid} />
      </a>
      <header>
        <h2 className={`mt3 f5 f4-l`}> {data.frontmatter.title}</h2>
      </header>
      <div className="mt3">
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
      <div>
        {page !== 'index' ?
          <Button link={data.frontmatter.url} text="VISIT" classes="bg-blue" />
          :
          null}
        {page !== 'index' && data.frontmatter.code !== null || undefined ?
          <Button link={data.frontmatter.code} text="CODE" classes="ml2 bg-dark-gray" />
          :
          null}
        {/* {data.frontmatter.type === 'theme' ?
          <div>
            <Button link={data.frontmatter.demo} text="DEMO" classes="mr2 bg-blue " />
            <Button link={data.frontmatter.code} text="DOCS" classes="mr2 bg-dark-gray" />
            <Button link={`../${data.frontmatter.download}`} download text="DOWNLOAD" classes="bg-red" />
          </div>
          :
          null
        } */}
      </div>
    </article>
  )
}

export default Theme