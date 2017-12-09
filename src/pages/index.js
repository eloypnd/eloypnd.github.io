import React from 'react'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <div>
    <Helmet>
      <title>Eloy Pineda | Personal website</title>
      <meta
        name='description'
        content='Doing web-stuff since 1999. Nowadays the trendy term is Full-stack developer. In the past I have been a web developer, web designer, web information architect and a lot of other things.' />
    </Helmet>
    <p>
      <a href='https://en.wikipedia.org/wiki/Web_development' target='_blank'>
        Doing web-stuff</a>
      &nbsp;since&nbsp;
      <a href='https://en.wikipedia.org/wiki/1999' target='_blank'>
        1999</a>.
    </p>
  </div>
)

export default IndexPage
