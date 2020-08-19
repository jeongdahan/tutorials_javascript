import React, { useState, useRef, useEffect } from 'react';
import MainContainer from '../containers/MainContainer';
import SideBar from '../components/sidebar';

const MainPage = (props) => {
  const left = 300;
  const [collapse, setCollapse] = useState(false);
  const sideBarRef = useRef(null);
  const MainContainerRef = useRef(null);
  const handleToggle = () => setCollapse(!collapse);

  useEffect(() => {
    if (collapse) {
      sideBarRef.current.style.left = `-${left}px`;
      MainContainerRef.current.style.marginLeft = '0';
    } else {
      sideBarRef.current.style.left = '0';
      MainContainerRef.current.style.marginLeft = `${left}px`;
    }
  }, [collapse]);

  return (
    <div id="mainPage">
      <SideBar sideBarRef={sideBarRef} {...props} />
      <MainContainer
        MainContainerRef={MainContainerRef}
        onToggle={handleToggle}
      />
    </div>
  );
};

export default MainPage;
