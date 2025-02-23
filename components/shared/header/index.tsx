import Image from 'next/image'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'
import ModeToggle from './mode-toggle'

const Header = () => {
  return (
    <header className='border-b px-3 py-2 flex justify-between items-center'>
      <Link href='/'>
        <Image
          className='rounded-full'
          src='/images/logo.png'
          alt={`${APP_NAME} logo`}
          height={70}
          width={70}
          priority
        />
      </Link>
      <ModeToggle />
    </header>
  )
}

export default Header
