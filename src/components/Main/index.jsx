import { Routes, Route } from 'react-router-dom';
import './style.css';

function News(){ 
    return ( 
        <p><h1>News</h1></p>  
    )  
}
function About(){ 
    return ( 
        <h1>«Южный федеральный университет»</h1>  
    )  
}
function Contacts(){
    return(
        <h2>8 (988) 566 - 67 - 67</h2>
    )
}


export function Main(){ 
    return <div class="main">
        <div class="main_container">
            <section class="flex-center"><img src="https://i.pinimg.com/736x/8d/17/10/8d1710fe39eccfe75ab40b7ef9ac99af.jpg" width={200} alt='mem'></img></section> 
            <article class="flex-center">
                <Routes>
                    <Route path='/news' element={<News />} /> 
                    <Route path='/about' element={<About />} /> 
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='*' element={<h3>Некорректная ссылка</h3>} />
                </Routes>
            </article> 
            <aside class="flex-center">Kalayda Varvara Denisovna</aside>
        </div>
    </div>  
}
    export default Main;