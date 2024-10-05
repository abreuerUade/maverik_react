import { Dropdown, DropdownMenu, DropdownToggle, Form, FormControl } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
const FloatingSearch = () => {
  return <Dropdown as="li" className="nav nav-item dropdown nav-search px-1 px-lg-3" align={'end'}>
      <DropdownToggle className="btn btn-light arrow-none border btn-round mb-0 flex-centered" id="navSearch" data-bs-toggle="dropdown" aria-expanded="true" data-bs-auto-close="outside" data-bs-display="static">
        <BsSearch />
      </DropdownToggle>
      <DropdownMenu renderOnMount className="dropdown-hover dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch" data-bs-popper="none">
        <Form className="input-group">
          <FormControl className="border-primary" type="search" placeholder="Search..." aria-label="Search" />
          <button className="btn btn-primary m-0" type="button">Search</button>
        </Form>
      </DropdownMenu>
    </Dropdown>;
};
export default FloatingSearch;