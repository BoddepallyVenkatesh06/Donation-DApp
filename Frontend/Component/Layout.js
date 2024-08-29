






export default function Layout({ children }) {
  

  return (
    <>

        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        {/* Below commented component only works if Navbar is imported in _app.js || To be done so once ever component listed below is complete */}
        {/* <Navbar handleLogout={handleLogout}/> */} 

        {children}

    
    </>
  )
}
