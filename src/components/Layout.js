import React from 'react'
import Head from 'next/head'

import 'normalize.css/normalize.css'
import '../styles.scss'

export default ({ children, title }) => (
  <>
    <Head>
      <link rel="icon" href="/static/favicon.png" />
      <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>
    {children}
  </>
)