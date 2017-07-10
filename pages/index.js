import Head from 'next/head'
import Link from 'next/link'
import Page from '../components/Page'
import styled from 'styled-components'
import cms from '../mockCms'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default () =>
  <Page title={cms.pages.home.title} metaDescription={cms.pages.home.metaDescription}>
    <div>
      Click{' '}
      <Link prefetch href="/about">
        <a>here</a>
      </Link>{' '}
      to reaad more
    </div>
  </Page>
