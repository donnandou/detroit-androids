import React from "react"

const NavBar = () => {
    return (
        <header className="bg-dark">
            <img src="img/logo.png" alt="Detroit Android Store" />
            <nav className="d-flex flex-row justify-content-around align-content-stretch align-items-stretch m-0">
                <a href="index.html" className="text-decoration-none font-weight-bolder">Home</a>
                <a href="categories.html" className="text-decoration-none font-weight-bolder">Categorías</a>
                <a href="about.html" className="text-decoration-none font-weight-bolder">Sobre Nosotros</a>
                <a href="contacto.html" className="text-decoration-none font-weight-bolder">Contacto</a>
            </nav>
        </header>
    )
}

export default NavBar