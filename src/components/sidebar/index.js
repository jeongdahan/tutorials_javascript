import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { sideBar } from '../../core/sideBar';
import { getAsyncAction } from '../../modules/posts';
import './index.scss';

const SideBar = ({ sideBarRef, match }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const handlePosts = useCallback(() => dispatch(getAsyncAction.request()), [
    dispatch,
  ]);

  console.log('posts: ', posts);

  return (
    <div id="sideBar" ref={sideBarRef}>
      <div onClick={handlePosts}>클릭</div>
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
                        <NavLink
                          to={`${match.url}/${v1.listsUrl}/${v2.url}`}
                          activeClassName="selected"
                          key={i2}
                        >
                          <li>{v2.title}</li>
                        </NavLink>
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
