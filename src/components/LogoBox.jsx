import { NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo_light from '@/assets/images/logo-black.png';
import logo_dark from '@/assets/images/logo-white.png';
const LogoBox = ({
  className,
  smallIcon,
  imageClassName
}) => {
  return smallIcon ? <img src={logo_light} className={className ?? ''} alt="logo" /> : <NavbarBrand as={Link} className={className ?? ''} to="/">
            <img className={`light-mode-item navbar-brand-item ${imageClassName ?? ''} `} src={logo_light} alt="logo" width="140px" height="auto"/>
            <img className={`dark-mode-item navbar-brand-item ${imageClassName ?? ''}`} src={logo_dark} alt="logo" width="140px" height="auto"/>
        </NavbarBrand>;
};
export default LogoBox;