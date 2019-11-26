import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
    const [employee, setEmployee] = useState({})
    const [animals, setAnimals] = useState([])

    const getEmployeeWithAnimals = () => {
        EmployeeManager.getWithAnimals(props.match.params.employeeId)
            .then((APIResult) => {
                setEmployee(APIResult)
                setAnimals(APIResult.animals)
            })
    }

    useEffect(getEmployeeWithAnimals, [])

    return (
        <div className="card">
            <p>Employee: {employee.name}</p>
            {animals.map(animal =>
                <AnimalCard
                    key={animal.id}
                    animal={animal}
                    {...props}
                />
            )}
        </div>
    )
}

export default EmployeeWithAnimals;