import '../styles/NavStyle.css'

const NavBar = () => {
    return(
        <div>
            <div className="NavBar">
                <div className="menu">
                    <a href="#service">УСЛУГИ</a>
                    <a href="#works">РАБОТЫ</a> 
                    <a href="#cont">КОНТАКТЫ</a> 
                    <a href="#coop" >СОТРУДНИЧЕСТВО</a>
                    <a className='asd' style={{textDecoration: 'none', padding: '0px'}} href="https://t.me/golube123"><button className='more'>СВЯЗАТЬСЯ</button></a>
                </div>
            </div>  
        </div>
    )
}

export default NavBar
