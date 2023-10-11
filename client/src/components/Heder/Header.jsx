import { Link } from 'react-router-dom';
import style from './heder.module.scss'
import MyContext from '../../context/context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

function Header() {
    const { token, logout } = useContext(MyContext)
    const navigate = useNavigate();

    function deleteToken() {
        logout()
        navigate('/')
    }

    if (token) {
        return (
            <div className={style.wrapper}>
                <p onClick={deleteToken}>Log out</p>
            </div>
        )
    } else {
        return (
            <div className={style.wrapper}>
                <p><Link to={'/'}>Sign in</Link></p>
                <p><Link to={'/reg'}>Sign Up</Link></p>
            </div>
        )
    }


}
export default Header;