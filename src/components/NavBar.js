import React from "react"
import CartWidget from "./CartWidget"
import logo from "../img/logo.png"

const NavBar = () => {
    return (
        <header className="bg-dark">
            <div className="row">
                <div className="col-2">
                    <img src={logo} alt="Detroit Android Store" />
                </div>
                <div className="col-8">
                    <nav className="d-flex flex-row justify-content-around align-content-stretch align-items-stretch m-0 pt-3">
                        <a href="index.html" className="text-decoration-none font-weight-bolder text-light">Home</a>
                        <a href="categories.html" className="text-decoration-none font-weight-bolder text-light">Categorías</a>
                        <a href="about.html" className="text-decoration-none font-weight-bolder text-light">Sobre Nosotros</a>
                        <a href="contacto.html" className="text-decoration-none font-weight-bolder text-light">Contacto</a>
                    </nav>
                </div>
                <div className="col-2">
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default NavBar