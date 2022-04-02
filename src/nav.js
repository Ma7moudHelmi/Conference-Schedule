function Nav() {
    return (
      <>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Conference Schedule</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/location">Location Info</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/food">Food Info</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Schedule">Schedule</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default  Nav;
  