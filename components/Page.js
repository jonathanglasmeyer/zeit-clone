import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title, metaDescription}) =>
  <div>
    <Head>
      <title>
        {title}
      </title>
      <meta charSet="utf-8" />
      {metaDescription && <meta name="description" content={metaDescription} />}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>

    {children}

    <footer>
      Footer
    </footer>
  </div>
