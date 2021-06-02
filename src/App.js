import './static/css/App.css';

function App() {
  return (
    <><nav className="navbar navbar-expand-lg navbar-dark navbar-manual">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><i className="fa fa-book"></i> Free-Mind Publishers</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Our Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
        </ul>
      </div>
    </div>
  </nav></>
  );
}

export default App;
