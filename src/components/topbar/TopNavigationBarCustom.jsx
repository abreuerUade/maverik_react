import { lazy, Suspense } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import LogoBox from '@/components/LogoBox';
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler';
import StickyHeader from '@/components/topbar/StickyHeader';
import useToggle from '@/hooks/useToggle';
const ThemeToggleDropdown = lazy(() => import('@/components/topbar/ThemeToggleDropdown'));

const TopNavigationBarCustom = ({
  showSignUp,
  navClassName,
  hideThemeToggler,
  darkButton,
  menuProps,
  containerFluid,
  children,
  ...props
}) => {
  const {
    isTrue: isMenuOpen,
    toggle: toggleMenu
  } = useToggle(window.innerWidth >= 1200);
  return <StickyHeader className="header-absolute" {...props}>
      {children}
      <nav className={`navbar navbar-expand-xl ${navClassName ?? ''}`}>
        <Container fluid={containerFluid}>

          <LogoBox className='me-0' />

          <Suspense>
            <Link className="nav-link" to="/about_us">
                Sobre Nosotros
            </Link>
            <Link className="nav-link" to="/wizard">
                Copiloto Financiero
            </Link>
            <Link className="nav-link" to="/contact">
                Contactanos
            </Link>
          </Suspense>

          <ul className="nav align-items-center ms-sm-2">

            <Suspense>
              {!hideThemeToggler && <ThemeToggleDropdown />}
            </Suspense>

            {showSignUp && <li className="nav-item me-2 d-none d-sm-block">
              <Link to="/auth/sign-up" className="btn btn-sm btn-light mb-0">
                <BsPersonCircle className="me-1" />
                Registrarse
              </Link>
            </li>}
            <li className="nav-item me-2 d-none d-sm-block">
              <Link to="/auth/sign-in" className="btn btn-sm btn-light mb-0">
                <BsPersonCircle className="me-1" />
                Iniciar Sesión
              </Link>
            </li>

            {darkButton && <li className="nav-item d-none d-sm-block ms-2">
                <Button variant='dark' size={darkButton.size} className="btn mb-0">{darkButton.text}</Button>
              </li>}

            <li className="nav-item">
              <MobileNavbarToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>

          </ul>
        </Container>
      </nav>

    </StickyHeader>;
};
export default TopNavigationBarCustom;