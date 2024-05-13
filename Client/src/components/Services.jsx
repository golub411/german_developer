import { useState } from "react"
import tilda from '../photos/tilda.png'
import react from '../photos/REACT.png'
import figma from '../photos/figma.png'
import redesign from '../photos/redesign.png'
import '../styles/serviceStyle.css'


const Services = () => {
    const mack = 'https://wemakefab.ru/imgs/devices/macbook.png'
    const [service, setService] = useState({img: tilda, title: 'САЙТЫ НА TILDA', desc: 'Лендинг для привлечения клиентов с эффектным дизайном, который точно запомнится надолго', number: '01'})
    const changeService = (number) => {
        if (number !== service.number){  
            switch (number) {
                case '01':
                    setService({
                        img: tilda, title: 'САЙТЫ НА TILDA', desc: 'Лендинг для привлечения клиентов с эффектным дизайном, который точно запомнится надолго', number: '01'
                    })
                break;
                case '02':
                    setService({
                        img: react, title: 'САЙТ НА REACT', desc: 'Сложный высокотехнологичный сайт с изящным дизайном. например интернет-магазин', number: '02'
                    })
                break;
                case '03':
                    setService({
                        img: figma, title: 'ДИЗАЙН', desc: 'Я внимательно изучу ваши потребности, учту ваши пожелания, чтобы создать уникальный дизайн', number: '03'
                    })
                break;
                case '04':
                    setService({
                        img: redesign, title: 'РЕДИЗАЙН', desc: 'Если у вас уже есть сайт, я могу его освежить. Мода никогда не стоит на месте, даже в мире сайтов', number: '04'
                    })
                break;
            }
        }
    }

    return(
        <div className="service">
            <div className="image">
                <img style={{width: '100%', height: 'auto'}} src={service.img} alt="" />
            </div>
            <div className="txt">
                <h3 className="title">{service.title}</h3>
                <h5 className="description">{service.desc}</h5>
                <div className="nums">
                    <button
                    style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '10px',
                        border: '2px solid rgb(0, 71, 255)',
                        color: service.number === '01'? 'white': 'rgb(0, 71, 255)',
                        backgroundColor: service.number === '01'? 'rgb(0, 71, 255)': 'white',
                        cursor: 'pointer',
                        transition: '0.3s',
                        fontSize: '30px'
                    }}
                    onClick={()=>changeService('01')}
                    >
                        1
                    </button>
                    <button
                    style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '10px',
                        border: '2px solid rgb(0, 71, 255)',
                        color: service.number === '02'? 'white': 'rgb(0, 71, 255)',
                        backgroundColor: service.number === '02'? 'rgb(0, 71, 255)': 'white',
                        cursor: 'pointer',
                        transition: '0.3s',
                        fontSize: '30px',
                    }}
                    onClick={()=>changeService('02')}
                    >
                        2
                    </button>
                    <button
                    style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '10px',
                        border: '2px solid rgb(0, 71, 255)',
                        color: service.number === '03'? 'white': 'rgb(0, 71, 255)',
                        backgroundColor: service.number === '03'? 'rgb(0, 71, 255)': 'white',
                        cursor: 'pointer',
                        transition: '0.3s',
                        fontSize: '30px',
                    }}
                    onClick={()=>changeService('03')}
                    >
                        3
                    </button>
                    <button
                    style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '10px',
                        border: '2px solid rgb(0, 71, 255)',
                        color: service.number === '04'? 'white': 'rgb(0, 71, 255)',
                        backgroundColor: service.number ==='04'? 'rgb(0, 71, 255)':  'white',
                        cursor: 'pointer',
                        transition: '0.3s',
                        fontSize: '30px',
                    }}
                    onClick={()=>changeService('04')}
                    >
                        4
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
export default Services;