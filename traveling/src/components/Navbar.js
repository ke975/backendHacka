import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
  <Link to="" className="navbar-brand ml-5" >Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse text-center" id="navbarNav">
    <ul className="navbar-nav mr-5 ml-auto">
      <li className="nav-item active">
        <Link to="" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to="" className="nav-link" >Features</Link>
      </li>
      <li className="nav-item">
        <Link to="" className="nav-link" >Pricing</Link>
      </li>
    
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar