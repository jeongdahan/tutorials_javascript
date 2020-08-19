import React from 'react';
import './index.scss';

const DefaultTable = () => {
  return (
    <div className="defaultTable">
      <div className="tableHeader">
        <div className="tableTitle">제목</div>
      </div>
      <div className="tableBody">
        <div className="optionWrap d-flex justify-content-between align-items-center">
          <div className="optionFilterWrap">Filter</div>
          <div className="optionItems">Items per Page</div>
        </div>

        <div className="tableInnerWrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Buyer</th>
                <th>Brand</th>
                <th>PO#</th>
                <th>DPO#</th>
                <th>Issue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>476633</td>
                <td>Gap Inc.</td>
                <td>GAP</td>
                <td>WS27Q</td>
                <td>WS27Q5A</td>
                <td>2020/09/23</td>
              </tr>
              <tr>
                <td>476633</td>
                <td>Gap Inc.</td>
                <td>GAP</td>
                <td>WS27Q</td>
                <td>WS27Q5A</td>
                <td>2020/09/23</td>
              </tr>
              <tr>
                <td>476633</td>
                <td>Gap Inc.</td>
                <td>GAP</td>
                <td>WS27Q</td>
                <td>WS27Q5A</td>
                <td>2020/09/23</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Buyer</th>
                <th>Brand</th>
                <th>PO#</th>
                <th>DPO#</th>
                <th>Issue</th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="paginationWrap" aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DefaultTable;
