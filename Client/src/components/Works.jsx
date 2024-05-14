import '../styles/WorksStyle.css'

const Works = ({name, photos}) => {
    return(
        <div className='works'>
            <h2 className='name'>{name}</h2>
            <div className="cards">
                {photos.map((photo, index) => 
                    <img src={photo} className="card" alt="" key={index}/>
                )}
            </div>
        </div>
    )
}
export default Works;