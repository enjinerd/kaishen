import React from 'react';

const Header = () => {
  return (
    <Navbar className="bg-white text-gray-600 text-lg font-primary">
      <NavbarBrand href="#">
        <img
          src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
          alt="Next.js"
          className="w-9 h-9"
        />
      </NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNav orientation="end">
          <NavbarItem>
            <NavbarLink href="#">Features</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">About</NavbarLink>
          </NavbarItem>
          <NavbarItem type="highlight">
            <NavbarLink href="#">Get Started</NavbarLink>
          </NavbarItem>
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  );
};

/* Navbar logic */

const style = {
  navbar: `fixed px-4 py-2 shadow top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:relative`,
  brand: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap hover:text-gray-200`,
  toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
  item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-gray-200 `,
  collapse: {
    default: `border-t border-gray-200 fixed left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
  },
  nav: {
    start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
    middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
    end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0 gap-5`,
  },
};

const Context = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
  open: false,
});

type NavbarProps = {
  children: JSX.Element[] | JSX.Element;
  className?: string;
};

const Navbar = ({ children, className }: NavbarProps) => {
  const [open, setOpen] = React.useState(false);
  const navbarRef = React.useRef<HTMLHeadingElement>(null);

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // close navbar on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (e: Event) => {
      if (window.innerWidth < 1024) {
        const target = e.target as HTMLElement;
        if (!navbarRef.current?.contains(target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, navbarRef]);

  return (
    <Context.Provider value={{ open, toggle }}>
      <nav ref={navbarRef} className={`${className} ${style.navbar}`}>
        {children}
      </nav>
    </Context.Provider>
  );
};

const useToggle = () => React.useContext(Context);

type NavbarBrandProps = {
  children: JSX.Element[] | JSX.Element;
  href: string;
};
/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarBrand = ({ children, href }: NavbarBrandProps) => (
  <a href={href} className={style.brand}>
    <strong>{children}</strong>
  </a>
);

const NavbarToggler = () => {
  const { toggle } = useToggle();
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}>
      &#8801;
    </button>
  );
};

type NavbarCollapseProps = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const NavbarCollapse = ({ children }: NavbarCollapseProps) => {
  const { open } = useToggle();
  return (
    <div
      style={{ backgroundColor: 'inherit' }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}>
      {children}
    </div>
  );
};

type NavbarNavProps = {
  children: JSX.Element | JSX.Element[];
  orientation: 'start' | 'middle' | 'end';
};
const NavbarNav = ({ children, orientation }: NavbarNavProps) => (
  <ul className={style.nav[orientation]}>{children}</ul>
);

type NavbarItemProps = {
  children: JSX.Element[] | JSX.Element;
  type?: 'highlight';
};
const NavbarItem = ({ children, type }: NavbarItemProps) => {
  const highlightClass = 'rounded-md bg-green-500 text-white';
  return (
    <li className={`${style.item} ${type === 'highlight' && highlightClass}`}>
      {children}
    </li>
  );
};

type NavBarLinkProps = {
  children: JSX.Element[] | JSX.Element | string;
  href: string;
  active?: boolean;
  activeClass?: string;
};

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarLink = ({ children, href, active, activeClass }: NavBarLinkProps) => (
  <a href={href} className={active ? activeClass : ''}>
    {children}
  </a>
);

export default Header;
