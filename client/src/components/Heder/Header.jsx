import style from './heder.module.scss'

function Header() {
    return (
        <div className={style.wrapper}>
            <p>Sign in</p>
            <p>Sign Up</p>
        </div>
    )
}
export default Header;