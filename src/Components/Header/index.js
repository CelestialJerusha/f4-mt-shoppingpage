import { Link } from 'react-router-dom'
import './index.css'

const Header = () => (
    <nav className="nav-header">
        <h1 className="nav-title">Shopping</h1>
            <ul className="nav-menu">
                <li>
                    <Link className='nav-link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='nav-link' to="/Cart">Cart</Link>
                </li>
            </ul>
    </nav>
)

export default Header 