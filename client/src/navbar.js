function Navbar(){

    return(

        <div className="navbar">
            <div className='nav-1'>
           <div className='md-col-1 brand-box'>
             <a href='#' className='brand'>
                 Dantata
             </a>
           </div>

        <div className='md-col-9 collabsible-box bg-green'>
           <div className='col-10 menu-box bg-dark'>
             <ul className='menu-list'>
             <li>
                 Fruits 
             </li>

             <li>
                 Vegetables
             </li>

             <li>
                 Food stuffs
             </li>
             </ul>
           </div>
           </div>
        <div className='md-col-2'>
          <button className=''>Sign up</button>
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