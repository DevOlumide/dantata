function Navbar(){

    return(

        <div className="navbar">
            <div className='nav-1'>
           <div className='md-col-1 brand-box'>
             <a href='#' className=''>
                 Dantata
             </a>
           </div>

        <div className='md-col-10 collabsible-box bg-green'>
           <div className='col-10 menu-box bg-dark'>
             <ul className='menu-list'>
             <li>
                 Solar panels
             </li>

             <li>
                 Solar inverters
             </li>

             <li>
                 Automatic changeover
             </li>
             </ul>
           </div>
        </div>
        </div>
        <div className='nav-2'>
          <div className='md-col-1'>
          <button className='catalogue-btn'>Catalogue</button>
          </div>
          <div className='md-col-9'>
          <input className='navbar-input' placeholder='I am looking for...'/>
          </div>
           <div className='md-col-2 bg-black'>
             <img src='/assets/images/dog.jpg' className='profile-avatar' alt='Profile image'/>
             <span className=''>
               Ogunmola Samuel
             </span>
           </div>
           </div>
    </div>
    )
}

export default Navbar;