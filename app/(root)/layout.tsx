import Header from '@/components/shared/header'
import Footer from '@/components/footer'

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='main flex-1'>{children}</main>
      <Footer />
    </div>
  )
}

export default RootLayout
