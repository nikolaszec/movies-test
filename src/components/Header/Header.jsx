import React from 'react';
import HeaderItems from './HeaderItems/HeaderItems';

const Header = () => {
  let prev = window.scrollY;
  let style = {
    opacity: 1,
  };
  const handleNavigation = (e) => {
    const window = e.currentTarget;

    if (prev > window.scrollY) {
      console.log('scrolling up');
      style = {
        opacity: 1,
      };
    } else if (prev < window.scrollY) {
      console.log('scrolling down');
      style = { opacity: 0.4 };
    }
    prev = window.scrollY;
  };
  React.useEffect(() => {
    window.addEventListener('scroll', (e) => handleNavigation(e));
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div style={style}>
      <HeaderItems />
    </div>
  );
};

export default Header;
