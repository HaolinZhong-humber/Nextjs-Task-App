'use client';
 
import { usePathname } from 'next/navigation';
import Link from "next/link";

const Navigation = () => {
  const pathname = usePathname();
  
    return (
      <nav>
        <ul>
          <li>
            <Link href='/'  className={`link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/news' className={`link ${pathname === '/news' ? 'active' : ''}`}>
              News
            </Link>
          </li>
          <li>
            <Link
              href='/grocery'
             
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link href='/about'>
              About
            </Link>
          </li>
  
          <li>
            <Link href='/posts' >
              Posts
            </Link>
          </li>
          <li>
            <Link href='/login' >
              Login
            </Link>
            </li>
          <li>
            <Link
              href='/register'
             
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  export default Navigation;