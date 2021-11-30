function Navbar(){

    return(

        <div className="navbar">
              <div className='col-9'>
          <div className="brand-box">
              <a href='navbar-brand'> Dantata </a>
          </div>
          </div>
          <div className='col-9'>
          <div className='collapsible-nav'>
              <ul>
                  <li>
                      Solar panels
                  </li>
                  <li>
                      Solar inverters
                  </li>
              </ul>
          </div>
          <div className="avatar-box">
               <img src='' alt='Profile image' />
          </div>
          </div>
        </div>
    )
}

export default Navbar;