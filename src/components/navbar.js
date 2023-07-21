function navbar(){
    return (
        <div className="container-fluid" style={{height: '80px'}}>
        <div className="row">
          {/* Navbar Image and text (focus on centering the text with the logo) */}
          <nav className="navbar" style={{backgroundColor: '#F99E1A', border: 'none', height: '80px'}}>
            <a className="navbar-logo" href="index.html" alt="Logo">
              <img src="images/logo.png" style={{backgroundColor: 'black', objectFit: 'contain', height: '80px'}} />
            </a>
          </nav>
        </div>
      </div>
    );
}

export default navbar;