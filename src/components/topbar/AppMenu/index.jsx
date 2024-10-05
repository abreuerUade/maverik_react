import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { findAllParent, findMenuItem, getAppMenuItems, getMenuItemFromURL } from '@/helpers/menu';
import { basePath } from '@/states/constants';
const DemosMenuDropdown = lazy(() => import('./DemosMenuDropdown'));
const PagesMenuDropdown = lazy(() => import('./PagesMenuDropdown'));
const ResourcesMenuDropdown = lazy(() => import('./ResourcesMenuDropdown'));
const PortfolioMenuDropdown = lazy(() => import('./PortfolioMenuDropdown'));
const MegaMenuDropdown = lazy(() => import('./MegaMenuDropdown'));
const loading = () => <div></div>;
const AppMenu = ({
  mobileMenuOpen,
  ulClassName,
  showMegaMenu,
  showResourceMenu,
  showContactUs,
  showDocs
}) => {
  const {
    pathname
  } = useLocation();
  const [activeMenuItems, setActiveMenuItems] = useState([]);
  const menuItems = getAppMenuItems();
  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    const trimmedURL = pathname?.replaceAll(basePath !== '' ? basePath : '', '/');
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL);
    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key);
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)]);
      }
    }
  }, [pathname, menuItems]);
  useEffect(() => {
    activeMenu();
  }, [pathname, menuItems]);
  return <Collapse in={mobileMenuOpen} className='navbar-collapse'>
      <div>

        <ul className={`navbar-nav navbar-nav-scroll ${ulClassName ?? ''}`}>

          <Suspense fallback={loading()}>
            <DemosMenuDropdown menuItems={menuItems[0].children} activeMenuItems={activeMenuItems} />
          </Suspense>

          <Suspense fallback={loading()}>
            <PagesMenuDropdown menuItems={menuItems[1].children} activeMenuItems={activeMenuItems} />
          </Suspense>

          {showResourceMenu && <Suspense fallback={loading()}>
              <ResourcesMenuDropdown />
            </Suspense>}

          <Suspense fallback={loading()}>
            <PortfolioMenuDropdown menuItems={menuItems[2].children} activeMenuItems={activeMenuItems} />
          </Suspense>

          {showMegaMenu && <Suspense fallback={loading()}>
              <MegaMenuDropdown />
            </Suspense>}

          {showContactUs && <li className="nav-item">
              <Link className="nav-link" to="/contact/v1">
                Contact us
              </Link>
            </li>}

          {showDocs && <li className="nav-item">
              <a className="nav-link" href="https://themes.coderthemes.com/mizzle_r/docs" target='_blank'>
                Docs
              </a>
            </li>}

        </ul>

      </div>
    </Collapse>;
};
export default AppMenu;