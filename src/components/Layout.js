import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import 'normalize.css/normalize.css'
import '../styles.scss'

const Layout = ({ children, title }) => (
  <>
    <Head>
      <link rel='icon' href='/static/favicon.png' />
      <link href='https://fonts.googleapis.com/css?family=Karla:400,700' rel='stylesheet' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
    </Head>
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
