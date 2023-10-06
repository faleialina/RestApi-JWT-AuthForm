import Header from "../../components/Heder/Header";
import style from "./loginPage.module.scss";
function LoginPage() {
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
                        <input placeholder=" Your email" />
                    </div>
                    <div >
                        <p>password</p>
                        <input placeholder="Must be at least 8 characters." />
                    </div>
                </div>
                <button>Continue</button>
                <p className={style.sing}>Not registered yet? Sign Up</p>
            </div>
        </div>
    )
}

export default LoginPage;