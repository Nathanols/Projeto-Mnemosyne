import { Link } from 'react-router';
import LogoMnemosyne from '../../assets/icon/mnemosyne-logo.svg'

const Header = () => {

    return(
        <header class="app-header">
            <Link to="/home">
                <img src = {LogoMnemosyne} alt="Logo site mnemosyne"/>
            </Link>
        <nav class="links">
            <Link to="/home">Home</Link>
            <Link to="/criar">Adicionar Memória</Link>
        </nav>
    </header>
    )
}

export default Header;