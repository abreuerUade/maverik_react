import useScrollEvent from '@/hooks/useScrollEvent';
import { useRef } from 'react';
const StickyHeader = ({
  children,
  className,
  ...props
}) => {
  const headerRef = useRef(null);
  const {
    scrollY
  } = useScrollEvent();
  return <header ref={headerRef} className={`${scrollY >= 400 ? ' header-sticky-on ' : ''}${className ?? ''}`} {...props}>
      {children}
    </header>;
};
export default StickyHeader;