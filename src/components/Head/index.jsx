import { Link } from 'react-router-dom';
import './style.css';

const setActive =({isActive}) => (isActive ? "active" : "");

export function Head(){ 
    return <div className="header">
        <nav className="nav-container">
            <Link to="/news" className={setActive}>Новости</Link> 
            <Link to="/about" className={setActive}>О проекте</Link> 
            <Link to="/contacts" className={setActive}>Контакты</Link>
        </nav>

    </div>  
}
    export default Head;