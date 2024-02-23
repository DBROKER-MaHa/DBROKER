import { Pagination } from "react-bootstrap"

const PagePagination = ({ totalPages, currentPage, onPageChange }) => {
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };
  return (
    <Pagination className='w-10'>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item 
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
            style={index + 1 === currentPage ? { backgroundColor: 'red', color: '#fff' } : {}}
          >
            {index + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
  )
}

export default PagePagination
