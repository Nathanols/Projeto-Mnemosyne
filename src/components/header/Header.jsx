import LogoMnemosyne from '../../assets/icon/mnemosyne-logo.svg'

const Header = () => {

    return(
        <header class="app-header">
        <img src = {LogoMnemosyne} alt="Logo site mnemosyne"/>
        <nav class="links">
            <a href="#">home</a>
            <a href="#">adicionar memória</a>
        </nav>
    </header>
    )
}

export default Header;