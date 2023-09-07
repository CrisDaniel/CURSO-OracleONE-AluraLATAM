import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/Footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/profile.php?id=100007798158684&locale=es_LA">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href=".redes">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href=".redes">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="Org" />
        <strong>Desarrollado por Revoredo</strong>
    </footer>
}

export default Footer