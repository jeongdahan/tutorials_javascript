import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import DefaultTable from '../components/common/table/DefaultTable';

const MainContainer = ({ MainContainerRef, onToggle }) => {
  return (
    <div
      id="mainContainer"
      className="d-flex flex-column"
      ref={MainContainerRef}
      onToggle={onToggle}
    >
      <Header onToggle={onToggle} />
      <div id="body" className="flex-grow-1">
        <DefaultTable />
      </div>
      <Footer />
    </div>
  );
};

export default MainContainer;
