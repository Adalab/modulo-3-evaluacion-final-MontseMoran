import logoHp from "../../assets/Harry-Potter.png"
import"../../styles/Header.scss"

function Header(){
    return (
        <header className="header">
        <img src={logoHp} alt="Harry Potter logo" className= "header__logo"/>
        </header>
    )
}

export default Header;