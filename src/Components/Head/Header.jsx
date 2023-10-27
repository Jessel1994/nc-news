import {Link} from 'react-router-dom'


function Header({user}) {
    return (
        <header className='header-section'>
            <h1>NC NEWS APP</h1>
            <div className='user-welcome'>
                
                <p>Welcome back {user.name} </p>
                <img className='avatar' src={user.avatar_url}/>
                

            </div>
            
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/articles">ARTICLES</Link>
                <Link to="/topics">TOPICS</Link>
            </nav>
        </header>
    )
}
export default Header