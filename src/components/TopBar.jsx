import { Fragment, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { CurrentUserContext } from 'contexts/currentUser'

const TopBar = () => {

   const [currentUserState] = useContext(CurrentUserContext)

   return (
      <nav className='navbar navbar-light'>
         <div className='container'>
            <Link to='/' className='navbar-brand'>Medium</Link>
            <ul className='nav navbar-nav pull-xs-right'>
               <li className='nav-item'>
                  <NavLink to='/' exact className='navbar-link'>Home</NavLink>
               </li>
               {currentUserState.isLoggedIn === false && (
                  <Fragment>
                     <li className='nav-item'>
                        <NavLink to='/login' className='navbar-link'>Sign in</NavLink>
                     </li>
                     <li className='nav-item'>
                        <NavLink to='/register' className='navbar-link'>Sign up</NavLink>
                     </li>
                  </Fragment>
               )}
               {currentUserState.isLoggedIn && (
                  <Fragment>
                     <li className='nav-item'>
                        <NavLink to='/articles/new' className='nav-link'>
                           <i className='ion-compose'></i>
                           &nbsp; New Post
                        </NavLink>
                     </li>
                     <li className='nav-item'>
                        <NavLink to={`/profiles/${currentUserState.currentUser.username}`}
                           className='nav-link'
                        >
                           <img
                              className='suer-pic'
                              src={currentUserState.currentUser.image}
                              alt=''
                           />
                           &nbsp; {currentUserState.currentUser.username}
                        </NavLink>
                     </li>
                  </Fragment>
               )}
            </ul>
         </div>
      </nav>
   )
}


export default TopBar