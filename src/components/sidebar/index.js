import React from 'react';
import { NavLink } from 'react-router-dom';
import { sideBar } from '../../core/sideBar';
import './index.scss';

const SideBar = ({ sideBarRef, match }) => {
  console.log(match);
  return (
    <div id="sideBar" ref={sideBarRef}>
      <div className="sideBarBrand d-flex justify-content-center align-items-center">
        <img src="http://placehold.it/180x35" />
      </div>

      <div id="accordion">
        {sideBar.map((v1, i1) => {
          return (
            <div className="card" key={v1.listsId}>
              <div className="card-header">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link d-flex align-items-center"
                    data-toggle="collapse"
                    data-target={`#acc${v1.listsId}`}
                    aria-expanded={`${i1 === 0 ? 'true' : 'false'}`}
                  >
                    <i className={`listsIcon ${v1.listsIcon}`}></i>
                    {v1.listsTitle}
                    <i className="fas fa-angle-down arrow"></i>
                  </button>
                </h5>
              </div>

              <div
                id={'acc' + v1.listsId}
                className={`collapse ${i1 === 0 && 'show'}`}
                data-parent="#accordion"
              >
                <div className="card-body">
                  <ul>
                    {v1.list.map((v2, i2) => {
                      return (
                        <li key={i2}>
                          <NavLink
                            to={`${match.url}/${v2.url}`}
                            activeClassName="selected"
                          >
                            {v2.title}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
