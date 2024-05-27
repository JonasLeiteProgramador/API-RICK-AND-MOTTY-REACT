import { oneOfType } from 'prop-types'
import PropTypes from 'prop-types'
import './Card.css'



export const Card = ({ id, name, status, species, gender, image }) => {
    return (
        <ul className='lista'>

            <li className='item'>
                <div key={id} className="card">
                    <h1>{name}</h1>
                    <p>Status: {status}</p>
                    <p>Espécie: {species}</p>
                    <p>Gênero: {gender}</p>
                    <img src={image} className="img" alt={name} />
                </div>
             
              
            </li>


        </ul>


    )
   
}

Card.propTypes = {
    id:oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    name:PropTypes.string.isRequired,
    status:PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
   }