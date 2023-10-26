import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className='header-section'>
            <h1>NC NEWS APP</h1>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/articles">ARTICLES</Link>
                <Link to="/topics">TOPICS</Link>
            </nav>
        </header>
    )
}
export default Header