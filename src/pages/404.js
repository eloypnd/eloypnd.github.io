import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>404 - Not Found</h2>
    <small>
      This is a humble single page website.
      <br />
      There is only a <Link to='/'>home page</Link>.
    </small>
  </div>
)

export default IndexPage
