import React from 'react';
import './index.scss';

const Header = ({ onToggle }) => {
  return (
    <div id="header">
      <div className="sectionWrap d-flex align-items-center">
        <button onClick={onToggle}>
          <i className="fas fa-align-justify"></i>
        </button>
        <div id="listsWrap" className="d-flex align-items-center">
          <h6 className="list">Users</h6>
          <h6 className="list">Settings</h6>
        </div>
      </div>
      <div id="breadCrumbWrap" aria-label="breadcrumb">
        <div className="breadcrumb">
          <h6 className="breadcrumb-item">Home</h6>
          <h6 className="breadcrumb-item">Library</h6>
          <h6 className="breadcrumb-item active">Data</h6>
        </div>
      </div>
    </div>
  );
};

export default Header;
