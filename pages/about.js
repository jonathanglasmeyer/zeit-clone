import Head from 'next/head'
import Link from 'next/link'
import Page from '../components/Page'
import styled from 'styled-components'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default () =>
  <Page title="About">
    <div>
      About
    </div>
  </Page>
