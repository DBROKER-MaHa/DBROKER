import { Link } from "react-router-dom"
import {FaSearch} from 'react-icons/fa'

function NotFound() {
  return (
    <div className='container card d-flex flex-column align-items-center m-5 p-5'>
      <h1 className="notFound-text">!Not Found</h1>
      <p className="fs-3">The Resource Requested could not be found in this Server.</p>
       <div>
        <Link to='/services' className="btn-notFound text-black fs-5 "><FaSearch/>Back to Your Search</Link>
       </div>
    </div>
  )
}

export default NotFound
