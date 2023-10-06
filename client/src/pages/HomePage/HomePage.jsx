import style from "./homePage.module.scss";
import Header from "../../components/Heder/Header";

function HomePage() {
    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.img}></div>
                <h1>Woohoo!</h1>
                <p>You have successfully logged into the system, and a token has been assigned to you. To log out, please click on 'Sign Out'.</p>
            </div>
        </div>
    )

}

export default HomePage;