import Marquee from 'react-double-marquee';
import '../styles/PresentStyle.css'

const Present = () => {
    return(
        <div className='present'>
            <div className="phot"></div>
            <div className="text">
                <div className="tegs">
                    <h1 className='name'>ГЕРМАН</h1>
                    <h3 className='job'>ВЕБ-РАЗРАБОТЧИК</h3>
                    <div style={{fontSize: '64px', whiteSpace: 'nowrap', marginLeft: '7px', color: 'rgb(0, 71, 255)'}}>
                        <Marquee delay='0' speed='-0.04' scrollWhen="always">
                            ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА
                        </Marquee>
                    </div>
                    
                </div>
                <h4 className='desc'>
                    Создаю уникальные адаптивные сайты, которые точно запомнятся
                </h4>
            </div>
        </div>
    )
}

export default Present;