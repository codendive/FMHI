import Image from 'next/image'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

const Header = () => {
  return (
    <header className='border-b'>
      <Link className='flex items-center' href='/'>
        <Image
          src='/images/logo.png'
          alt={`${APP_NAME} logo`}
          height={80}
          width={80}
          priority
        />
      </Link>
    </header>
  )
}

export default Header
