import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default () => <div>
    <Head>
      <title>foo</title>
    </Head>
<Title>foo</Title>
  <div>Click <Link prefetch href="/about"><a>here</a></Link> to reaad more</div>
</div>
