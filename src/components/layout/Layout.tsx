import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import MobileMenu from './MobileMenu'
import GlobalSVGDefs from '../ui/GlobalSVGDefs'
import { useMobileMenu } from '../../hooks/useMobileMenu'

export default function Layout() {
  const { isOpen, toggle, close } = useMobileMenu()
  const { pathname } = useLocation()

  useEffect(() => {
    close()
    window.scrollTo(0, 0)
  }, [pathname, close])

  return (
    <>
      <GlobalSVGDefs />
      <Header mobileOpen={isOpen} onMobileToggle={toggle} />
      <MobileMenu open={isOpen} onClose={close} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
