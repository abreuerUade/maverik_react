import { lazy, Suspense } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import LogoBox from '@/components/LogoBox';
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler';
import StickyHeader from '@/components/topbar/StickyHeader';
import useToggle from '@/hooks/useToggle';
import { buyLink } from '@/states/constants';
const FloatingSearch = lazy(() => import('./FloatingSearch'));
const SearchInput = lazy(() => import('./SearchInput'));
const ThemeToggleDropdown = lazy(() => import('@/components/topbar/ThemeToggleDropdown'));
const AppMenu = lazy(() => import('@/components/topbar/AppMenu'));
const ShoppingCartOffcanvas = lazy(() => import('@/components/topbar/ShoppingCartOffcanvas'));
const TopNavigationBar = ({
  showBuyNow,
  showSignUp,
  showSearchInput,
  showShoppingCart,
  navClassName,
  hideThemeToggler,
  darkButton,
  showFloatingSearch,
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
            <AppMenu mobileMenuOpen={isMenuOpen} {...menuProps} />
          </Suspense>

          <ul className="nav align-items-center ms-sm-2">

            <Suspense>
              {!hideThemeToggler && <ThemeToggleDropdown />}
            </Suspense>

            {showSignUp && <li className="nav-item me-2 d-none d-sm-block">
              <Link to="/auth/sign-up" className="btn btn-sm btn-light mb-0">
                <BsPersonCircle className="me-1" />
                Sign up
              </Link>
            </li>}

            {showBuyNow && <li className="nav-item d-none d-sm-block">
              <a href={buyLink} target='_blank' className="btn btn-sm btn-primary mb-0">Buy now!</a>
            </li>}

            {showFloatingSearch && <Suspense>
                <FloatingSearch />
              </Suspense>}

            {darkButton && <li className="nav-item d-none d-sm-block ms-2">
                <Button variant='dark' size={darkButton.size} className="btn mb-0">{darkButton.text}</Button>
              </li>}

            {showSearchInput && <Suspense>
                <SearchInput />
              </Suspense>}

            {showShoppingCart && <Suspense>
                <ShoppingCartOffcanvas />
              </Suspense>}

            <li className="nav-item">
              <MobileNavbarToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>

          </ul>
        </Container>
      </nav>

    </StickyHeader>;
};
export default TopNavigationBar;