import React from 'react'
import { Helmet } from 'react-helmet'
import {
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconStackOverflow,
  LinkUnstyled
} from '../components/Icons'

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
    <LinkUnstyled href='https://github.com/eloypnd'>
      <IconGithub />
    </LinkUnstyled>
    &nbsp;&nbsp;
    <LinkUnstyled href='http://linkedin.com/in/eloypnd'>
      <IconLinkedin />
    </LinkUnstyled>
    &nbsp;&nbsp;
    <LinkUnstyled href='http://twitter.com/eloypnd'>
      <IconTwitter />
    </LinkUnstyled>
    &nbsp;&nbsp;
    <LinkUnstyled href='https://stackoverflow.com/users/1170428/eloy'>
      <IconStackOverflow />
    </LinkUnstyled>
  </div>
)

export default IndexPage
