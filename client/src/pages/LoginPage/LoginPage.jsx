import Header from "../../components/Heder/Header";
import style from "./loginPage.module.scss";
import { useContext, useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import MyContext from "../../context/context";


function LoginPage() {
    
    const [inp, setInp] = useState({ email: '', password: '' });
    const contextGlobaldata = useContext(MyContext);
    const navigate = useNavigate();


    function changeInput(event) {
        setInp({ ...inp, [event.target.name]: event.target.value })
    }

    async function authResult() {
        const result = await axios.post('http://localhost:3001/user/auth', inp, { withCredentials: true });
        console.log(result.data);
        console.log(inp);
        contextGlobaldata.login()
        navigate('/home')
    }
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Sign in</h1>
                    <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>
                </div>
                <div className={style.log}>
                    <div >
                        <p>email</p>
                        <input name="email" onChange={changeInput} placeholder=" Your email" />
                    </div>
                    <div >
                        <p>password</p>
                        <input name="password" onChange={changeInput} placeholder="Must be at least 8 characters." />
                    </div>
                </div>
                <button onClick={authResult}>Continue</button>
                <p className={style.sing}>Not registered yet? Sign Up</p>
            </div>
        </div>
    )
}

export default LoginPage;