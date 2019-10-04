import About from '../pages/About';
import Contact from '../pages/Contact';
import Link from 'next/link'

function Nav() {
  return (
    <div>
      <Link href="/">
        <a style={{marginRight:15}}>Home</a>
      </Link>
      <Link href="/About">
        <a style={{marginRight:15}}>About</a>
      </Link>
      <Link href="/Contact">
        <a style={{marginRight:15}}>Contact</a>
      </Link>
      <br />

    </div>
  )
}

export default Nav;
