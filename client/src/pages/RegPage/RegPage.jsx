import Header from "../../components/Heder/Header";
import style from './regPage.module.scss'
import { useState } from "react";
import axios from 'axios';

function RegPage() {
    const [inp, setInp] = useState({name:'', surname:'', email:'', password:''});
    

    function changeInput(event) {
        setInp({ ...inp, [event.target.name]: event.target.value })
    }

    async function regResult() {
        const result = await axios.post('http://localhost:3001/user', inp);
        console.log(result.data);
        console.log(inp);
    }

    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1> Welcome, let's create an account</h1>
                    <p>Create an account to keep track of your customers, and contributors. Once your account has been created then don’t forget to verify your account through mail.</p>
                </div>
                <div className={style.log}>

                    <div className={style.blokName}>
                        <div >
                            <p>name</p>
                            <input name="name" onChange={changeInput} placeholder=" Your name" />
                        </div>
                        <div >
                            <p>surname</p>
                            <input name="surname" onChange={changeInput} placeholder=" Your surname" />
                        </div>
                    </div>
                    <div >

                        <p>email</p>
                        <input name="email" onChange={changeInput} placeholder="Your email" />
                    </div>
                    <div >
                        <p>password</p>
                        <input name="password" onChange={changeInput} placeholder="Must be at least 8 characters." />
                    </div>

                </div>
                <button onClick={regResult}>Continue</button>
                <p className={style.sing}>Not registered yet? Sign Up</p>
            </div>
        </div>
    )
}

export default RegPage;