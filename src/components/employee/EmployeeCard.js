import React from 'react'

const EmployeeCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h5 className="card-title">{props.employee.name}</h5>
                <button type="button"
                    onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details</button>
            </div>
        </div>
    )
}

export default EmployeeCard