import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
        <Link href='/' className='md:flex-1'>
            <Image 
                src="/assets/images/logo_1.png" 
                alt="Logo with title" 
                width={180} 
                height={32} 
                className='hidden md:block' 
            />
            <Image
                src="/assets/images/logo.png" 
                alt="Logo icon"
                width={82} 
                height={82} 
                className='mr-2 md:hidden' 
            />
        </Link>
        {children}
    </div>
  )
}

export default Header