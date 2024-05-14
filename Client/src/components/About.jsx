import '../styles/AboutStyle.css'
import Marquee from 'react-double-marquee';

const About = () => {
    return(
        <div className="about">
            <div className="pr">
                <h1 className='ab'>ОБО МНЕ</h1>
                <div className="ri">
                    <div className="line"></div>
                    <div className="rp">
                        <h2 className='nam'>ГЕРМАН</h2>
                        <h3 className='jb'>ВЕБ-РАЗРАБОТЧИК</h3>
                        <div className='run' style={{whiteSpace: 'nowrap', marginLeft: '7px', color: 'rgb(0, 71, 255)'}}>
                            <Marquee delay='0' speed='-0.04' scrollWhen="always">
                                ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА ИНТЕРНЕТ-МАГАЗИН ЛЕНДИНГ САЙТ-ВИЗИТКА
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bt">
                <div className="pho"></div>
                <p className='aboutme'>Я - молодой, талантливый веб-разработчик, с большим потенциалом и энтузиазмом. Моя приверженность современным тенденциям в веб-дизайне позволяют мне вносить свежие и инновационные идеи в каждый проект. <br/><br/> 

Сочетание моего таланта и глубокого понимания современных технологий позволяет мне создавать современные, стильные и функциональные веб-сайты. Я постоянно изучаю новейшие инструменты и техники, чтобы обеспечивать моим клиентам самое передовое решение для их сайтов.<br/><br/> 

В своей работе я стремлюсь к совершенству и неуклонно преследую цель создания уникальных и визуально привлекательных веб-сайтов. Мое молодое видение и творческий подход позволяют мне превратить ваши идеи в реальность, отражая вашу индивидуальность и брендовую идентичность.</p>

            </div>
        </div>
    )
}
export default About;