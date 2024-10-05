import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
const PageBreadcrumb = ({
  items,
  dark,
  breadcrumbClassName
}) => {
  return <Breadcrumb listProps={{
    className: `breadcrumb-dots ${breadcrumbClassName ?? ''} ${dark ? 'breadcrumb-dark' : ''}`
  }}>
      {items.map((item, idx) => <BreadcrumbItem {...items.length - 1 === idx ? {
      "aria-current": 'page'
    } : {}} active={items.length - 1 === idx} key={idx}>
          {item}
        </BreadcrumbItem>)}
    </Breadcrumb>;
};
export default PageBreadcrumb;