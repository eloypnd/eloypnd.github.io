import React from 'react'
import Logo from '../components/Logo'

export default ({ children, data, location }) =>
  <div style={{ margin: `1rem auto`, padding: `0 1rem`, width: '320px' }}>
    <Logo style={{width: '50%'}} />
    <h1>
      {data.site.siteMetadata.title}
      <br />
      <small>{data.site.siteMetadata.subtitle}</small>
    </h1>
    {children()}
  </div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title,
        subtitle
      }
    }
  }
`
