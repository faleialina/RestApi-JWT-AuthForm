import cookie from 'js-cookie';
import { useState, useEffect } from 'react';

function useAuth() {
    const [token, setToken] = useState(null);
    useEffect(() => {
        login()
    }, [])
    function login() {
        const token = cookie.get('access_token')
        setToken(token)
    }
    function logout() {
        cookie.remove('access_token')
        setToken(null)
    }
    return { token: token, login: login, logout: logout }
}

export default useAuth;