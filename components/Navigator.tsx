import Link from 'next/link'

export default function Navigator() {
  return (
    <nav style={{margin:'0 -4px'}}>
      <Link href="/">
        <a className="link" style={{padding: '2px 4px'}}>Home</a>
      </Link>
      <Link href="about">
        <a className="link" style={{padding: '2px 4px'}}>About</a>
      </Link>
    </nav>
  )
}
