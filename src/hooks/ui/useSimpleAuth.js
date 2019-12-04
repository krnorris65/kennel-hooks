import { useState } from 'react'

const remoteURL = "http://localhost:5002"


const useSimpleAuth = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const isAuthenticated = () => {
        return loggedIn || localStorage.getItem("credentials") !== null

    }

    const register = userInfo => {
        return fetch(`${remoteURL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(res => {
                console.log("register", res)
                if ("accessToken" in res) {
                    localStorage.setItem("credentials", res.accessToken)
                    setLoggedIn(true)
                }
            })
    }

    const login = userInfo => {
        // localStorage.setItem("credentials", JSON.stringify(creds))
        // setLoggedIn(true)
        return fetch(`${remoteURL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(res => {
                console.log("login", res)
                if ("accessToken" in res) {
                    localStorage.setItem("credentials", res.accessToken)
                    setLoggedIn(true)
                }
            })
    }

    const logout = () => {
        setLoggedIn(false)
        localStorage.removeItem("credentials")
    }

    return { isAuthenticated, logout, login, register }
}

export default useSimpleAuth