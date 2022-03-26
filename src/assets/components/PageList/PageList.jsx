import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import PreviousIcon from "../../img/fi_chevrons-left.svg";
import NextIcon from "../../img/fi_chevrons-right.svg";
import { PageItemList } from "../PageItemList/PageItemList";
import "./PageList.scss";

export const PageList = ({ title, header, datas, keys }) => {
  const [postsPerPage, setPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const getCurrentData = () => {
    return datas.slice(
      currentPage * postsPerPage,
      currentPage * postsPerPage + postsPerPage
    );
  };

  const changeLimitPage = (e) => {
    setPostPerPage(e.target.value);
  };

  const changePage = (e) => {
    setCurrentPage(e.target.value);
  };

  return (
    <div className="page-list">
      <h4 className="table-title">{title}</h4>
      <Table className="table-list" borderless>
        <thead>
          <tr>
            <th>No</th>
            {header.map((item, index) => {
              return (
                <th key={item + index} className="header-item">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {getCurrentData().map((data, index) => {
            return (
              <PageItemList
                key={`${data["id"]}`}
                keys={keys}
                datas={data}
                number={index + 1 + currentPage * postsPerPage}
              />
            );
          })}
        </tbody>
      </Table>
      <div className="button-group">
        <div className="button-group-2">
          <div className="dropdown">
            <div className="dropdown-title">Limit</div>
            <select
              name="limit-page"
              className="limit-page"
              onChange={changeLimitPage}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          <div className="dropdown">
            <div className="dropdown-title">Jump to page</div>
            <select
              name="jump-page"
              className="jump-page"
              onChange={changePage}
              value={currentPage}
            >
              {(() => {
                let options = [];
                for (let i = 0; i < postsPerPage; i++) {
                  options.push(
                    <option key={`jump-page-opt-${i}`} value={i}>
                      {i + 1}
                    </option>
                  );
                }
                return options;
              })()}
            </select>
          </div>
        </div>
        <ReactPaginate
          pageCount={Math.ceil(datas.length / postsPerPage)}
          marginPagesDisplayed={1}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          previousLabel={<img src={PreviousIcon} alt={"Prev"} />}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLabel={<img src={NextIcon} alt={"Next"} />}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
          breakClassName={"page-item disabled"}
          breakLinkClassName={"page-link"}
          onPageChange={handlePageClick}
          forcePage={currentPage}
        />
      </div>
    </div>
  );
};
