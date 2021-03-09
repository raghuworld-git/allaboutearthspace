import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalCount, pageLimit, pageClickHander, pageNumber }) => {

    const pageCount = Math.ceil(totalCount / pageLimit);

    const handlePageClick = (data) => {
        pageClickHander(data.selected)
    }
    return (
        <>
            <ReactPaginate
                previousLabel={'Previous'}
                previousLinkClassName='page-link'
                previousClassName='page-item'
                nextLabel={'Next'}
                nextLinkClassName='page-link'
                nextClassName='page-item'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                activeClassName={'active bg-primary'}
                forcePage={pageNumber}

            />
        </>
    )
}

export default Pagination
