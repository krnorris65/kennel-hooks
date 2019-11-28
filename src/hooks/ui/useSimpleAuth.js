import { useState } from 'react'

const remoteURL = "http://localhost:5002"


const useSimpleAuth = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const isAuthenticated = () => {
        return loggedIn || localStorage.getItem("credentials") !== null

    }

    const register = userInfo => {
        return fetch(`${remoteIRL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(res => {
                if ("token" in res) {
                    localStorage.setItem("credentials", res.token)
                    setIsLoggedIn(true)
                }
            })
    }

    const login = creds => {
        // localStorage.setItem("credentials", JSON.stringify(creds))
        // setLoggedIn(true)
        return fetch(`${remoteIRL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(res => {
                if ("token" in res) {
                    localStorage.setItem("credentials", res.token)
                    setIsLoggedIn(true)
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