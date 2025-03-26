import Footer from "../../src/components/footer/Footer"
import Header from "../../src/components/header/Header"

import '../home/home.css'

const Home = () => {

    return (
        <>
        <Header />
        <main className="app-main">
            <h1>Meus momentos</h1>
            <div className="cards-container">
                <a href="#" class="card-link">
                    <div className="card">
                        <div className="imagem"></div>
                        <h2></h2>
                        <p></p>
                    </div>
                </a>
                <div className="card">
                    <a href="#">
                        <div class="add"></div>
                        <h2>Adicionar memória</h2>
                        <p>Clique aqui para adicionar mais memórias.</p>
                    </a>
                </div>
            </div>
        </main>
        <Footer />
    </>

    )
}

export default Home;