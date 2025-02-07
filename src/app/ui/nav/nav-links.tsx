'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './nav-links.module.css'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav className={styles.nav}>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/subpage' ? 'active' : ''}`}
        href="/subpage"
      >
        subpage
      </Link>

      <Link
        className={`link ${pathname === '/todo' ? 'active' : ''}`}
        href="/todo"
      >
        todo
      </Link>

      <Link
        className={`link ${pathname === '/api' ? 'active' : ''}`}
        href="/api"
      >
        api
      </Link>

      <Link
        className={`link ${pathname === '/aichat' ? 'active' : ''}`}
        href="/aichat"
      >
        ai chat
      </Link>
    </nav>
  )
}