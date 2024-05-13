import '../styles/NavStyle.css'

const NavBar = () => {
    return(
        <div>
            <div className="NavBar">
                <div className="menu">
                    <a href="#products">УСЛУГИ</a>
                    <a href="#about">РАБОТЫ</a> 
                    <a href="#port">КОНТАКТЫ</a> 
                    <a href="#cont" >СОТРУДНИЧЕСТВО</a>
                    <button className='more'>СВЯЗАТЬСЯ</button>
                </div>
            </div>  
        </div>
    )
}

export default NavBar
