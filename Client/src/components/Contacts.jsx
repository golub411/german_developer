import tg from '../photos/tg.png'
import wa from '../photos/wa.png'
import inst from '../photos/inst.png'
import '../styles/Contacts.css'

const Contacts = () => {
    return(
        <div id='cont' className='conts' style={{
            marginRight: 'auto',
            marginLeft: 'auto',
        }}>
            <h2 style={{marginTop: '0', marginBottom: '30px', textAlign:'center'}}>КОНТАКТЫ</h2>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gridGap: '20px',
                marginBottom: '50px'
            }} className="icons">
                <a href="https://t.me/golube123"><img style={{with: '104px', height: '104px', cursor: 'pointer'}} src={tg} alt="" /></a>
                <a href="https://api.whatsapp.com/send?phone=79163444608"><img style={{with: '104px', height: '104px', cursor: 'pointer'}} src={wa} alt="" /></a>
            </div>
        </div>
    )
}
export default Contacts