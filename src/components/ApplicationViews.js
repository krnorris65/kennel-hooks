import { Route, Redirect } from 'react-router-dom'
import React from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import Login from './auth/Login'
import Register from './auth/Register'
import useSimpleAuth from '../hooks/ui/useSimpleAuth'

import EmployeeList from './employee/EmployeeList'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'

const ApplicationViews = props => {
    const { isAuthenticated } = useSimpleAuth()

    return (
        <React.Fragment>
            <Route exact path="/" render={(props) => {
                return <Home />
            }} />

            <Route path="/login" render={(props) => {
                return <Login {...props} />
            }} />
            <Route path="/register" render={(props) => {
                return <Register {...props} />
            }} />

            <Route exact path="/animals" render={(props) => {
                if (isAuthenticated()) {
                    return <AnimalList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                if (isAuthenticated()) {
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/animals/new" render={(props) => {
                if (isAuthenticated()) {
                    return <AnimalForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route path="/animals/:animalId(\d+)/edit" render={(props) => {
                if (isAuthenticated()) {
                    return <AnimalEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

            <Route exact path="/employees" render={(props) => {
                if (isAuthenticated()) {
                    return <EmployeeList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route exact path="/employees/:employeeId(\d+)/details" render={(props) => {
                if (isAuthenticated()) {
                    return <EmployeeWithAnimals employeeId={parseInt(props.match.params.employeeId)} {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

        </React.Fragment>
    )

}

export default ApplicationViews