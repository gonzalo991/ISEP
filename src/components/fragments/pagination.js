import React from "react";
import { Link, Outlet } from "react-router-dom";

const Pagination = ({ newsPerPage, totalNews, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.round(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {

                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <Link onClick={() => paginate(number)} to={`#/${number}`} className="page-link">{number}</Link>
                        </li>
                    )
                    )
                }
            </ul>
            <Outlet />
        </nav>

    )
}

export default Pagination;