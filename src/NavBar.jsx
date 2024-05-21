export function NavBar() {
    return(
    <>
        <nav className="nav">
            <img src="./src/assets/logo.svg" alt="" className="nav-img"/>
            <a className="nav-item" href="/">Szállások</a>
            <a className="nav-item" href="/UjSzallas">Új szállás</a>
        </nav>
    </>
    )
}