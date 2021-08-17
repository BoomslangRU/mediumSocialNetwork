import { Link, NavLink } from 'react-router-dom'

const TopBar = () => {
    return (
        <nav className='navbar navbar-light'>
            <div className="container">
                <Link to='/' className='navbar-brand'>Medium</Link>
                <ul className='nav navbar-nav pull-xs-right'>
                    <li className='nav-item'>
                        <NavLink to='/' exact className='navbar-link'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/login' className='navbar-link'>Sign in</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/register' className='navbar-link'>Sign up</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default TopBar