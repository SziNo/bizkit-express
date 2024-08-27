import Logo from './Logo'
import NavigationBar from './NavigationBar'
import ActionButtons from './ActionButtons'

const Navbar = () => {
  return (
    <header className='sticky top-0 flex justify-between items-center px-2 sm:px-5 py-1 border-b bg-opacity-50 backdrop-blur-xl z-50'>
      <Logo />
      <NavigationBar />
      <ActionButtons />
    </header>
  )
}

export default Navbar
