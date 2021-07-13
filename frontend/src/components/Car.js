import { FaPencilAlt } from 'react-icons/fa'

const Car = ({ car, onComment }) => {
    return (
        <>
            <div className='car reminder' >
                <h3>
                    {car.name}
                    <FaPencilAlt style={{ color: 'black', cursor: 'pointer' }} onClick={() => onComment(car.id)} />
                </h3>
                <hr />
                <p>Brand: {car.brand}</p>
                <p>Year: {car.year}</p>
                <p>Model: {car.model}</p>
            </div>
        </>
    )
}

export default Car