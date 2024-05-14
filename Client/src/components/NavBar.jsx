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
                    <a className='asd' style={{textDecoration: 'none', padding: '0px'}} href="https://t.me/golube123"><button className='more'>СВЯЗАТЬСЯ</button></a>
                </div>
            </div>  
        </div>
    )
}

export default NavBar
