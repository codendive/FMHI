const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='flex h-screen flex-col'>
      <div className='main flex-1'>{children}</div>
    </div>
  )
}

export default RootLayout
