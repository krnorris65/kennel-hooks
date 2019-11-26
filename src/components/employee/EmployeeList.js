import React, { useState, useEffect } from 'react'
import EmployeeCard from "./EmployeeCard"
import EmployeeManager from '../../modules/EmployeeManager'

const EmployeeList = props => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        EmployeeManager.getAll()
            .then(employees => {
                setEmployees(employees)
            })
    }

    useEffect(getEmployees, [])
    return (
        <React.Fragment>

            <section className="employees">
                {
                    employees.map(employee => <EmployeeCard key={employee.id} employee={employee} {...props} />)
                }
            </section>
        </React.Fragment>
    )

}

export default EmployeeList