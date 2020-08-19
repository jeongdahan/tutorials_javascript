import React, { useState, useRef, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
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
      <SideBar {...props} sideBarRef={sideBarRef} />
      <Switch>
        <Route
          exact
          path={props.match.path}
          render={(props) => (
            <MainContainer
              {...props}
              MainContainerRef={MainContainerRef}
              onToggle={handleToggle}
            />
          )}
        />
        <Route
          path={`${props.match.path}/:listsUrl/:url`}
          render={(props) => (
            <MainContainer
              {...props}
              MainContainerRef={MainContainerRef}
              onToggle={handleToggle}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default MainPage;
