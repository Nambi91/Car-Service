import React from 'react';
import Car from './Car'

const Cars = ({ cars, onComment }) => {
    return (
        <>
            {cars.map((car) => (
                <Car
                    key={car.id}
                    car={car}
                    onComment={onComment}
                />
            ))}
        </>
    )
}

export default Cars