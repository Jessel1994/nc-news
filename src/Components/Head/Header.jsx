import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className='header-section'>
            <h1>NC NEWS APP</h1>
            <nav className='header-links'>
                <Link className='header-press' to="/">HOME</Link>
                <Link className='header-press' to="/articles">ARTICLES</Link>
                <Link className='header-press' to="/topics">TOPICS</Link>
            </nav>
        </header>
    )
}
export default Header